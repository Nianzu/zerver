use argon2::{
    password_hash::{Salt, SaltString}, Argon2, Params, PasswordHash, PasswordHasher, PasswordVerifier
};
use hyper::Response;
use serde_json::value;
use std::fs::read_to_string;
use std::fs::File;
use std::io::BufReader;
use std::net::SocketAddr;
use std::path::Path;
use std::str;
use std::sync::Arc;
use std::{fs, time::Duration};
use tokio::io::AsyncWriteExt;
use tokio::net::TcpListener;
use tokio::net::TcpStream;
use tokio::{io::AsyncReadExt, time::timeout};
use tokio_rustls::rustls::internal::pemfile::{certs, rsa_private_keys};
use tokio_rustls::rustls::ServerConfig;
use tokio_rustls::TlsAcceptor;
mod authentication;
mod file_handler;
mod request_handler;
use tokio::sync::Mutex;
use walkdir::WalkDir;
use std::io::Write;

fn load_tls_config() -> Arc<ServerConfig> {
    // Open the key and cert files
    let cert_file = &mut BufReader::new(
        File::open("/etc/letsencrypt/live/nicozucca.com/fullchain.pem").unwrap(),
    );
    let key_file = &mut BufReader::new(
        File::open("/etc/letsencrypt/live/nicozucca.com/privkey_rsa.pem").unwrap(),
    );

    // Load them
    let cert_chain = certs(cert_file).unwrap();
    let mut keys = rsa_private_keys(key_file).unwrap();

    // Kill if error
    if keys.is_empty() {
        panic!("No private key found in key.pem");
    }

    // Create a new ServerConfig with default settings
    let mut config = ServerConfig::new(tokio_rustls::rustls::NoClientAuth::new());

    // Set the certificates and private key
    config
        .set_single_cert(cert_chain, keys.remove(0))
        .expect("invalid key or certificate");

    // Use arc for threadsaftey
    Arc::new(config)
}

#[tokio::main]
async fn main() {
    // Generate the TLS object
    let tls_config = load_tls_config();
    let tls_acceptor = TlsAcceptor::from(tls_config);

    let session_id = Arc::new(Mutex::new(String::new()));

    // Setup a listener on the TLS port
    let addr: SocketAddr = "0.0.0.0:443".parse().unwrap();
    let listener = TcpListener::bind(addr).await.unwrap();

    loop {
        // Wait for a new connection
        let (stream, _) = listener.accept().await.unwrap();

        // Create a TLS object to handle the connection
        let tls_acceptor = tls_acceptor.clone();

        tokio::spawn({
            let session_id = Arc::clone(&session_id);
            async move {
                // Accept the connection in a new tokio thread
                let tls_stream = match tls_acceptor.accept(stream).await {
                    Ok(v) => v,
                    Err(_) => return,
                };

                // Process the connection
                handle_connection(tls_stream, session_id).await;
            }
        });
    }
}

fn generate_file_tree(path: &str) -> serde_json::Value {
    // Define the base directory
    let base_dir = "/home/zico/zerver/website/secured/obsidian";

    // Ensure the path stays within the base directory
    let starting_path = Path::new(path).canonicalize().expect("error");
    let full_path = if starting_path.starts_with(base_dir) {
        path.to_string()
    } else {
        base_dir.to_owned()
    };

    let mut tree = serde_json::json!([]);
    for entry in WalkDir::new(&full_path)
        .max_depth(1)
        .into_iter()
        .filter_map(|e| e.ok())
    {
        let file_name = entry.path().canonicalize().expect("error").file_name().expect("error").to_string_lossy().to_string();
        let is_dir = entry.file_type().is_dir();
        tree.as_array_mut().unwrap().push(serde_json::json!({
            "name": file_name,
            "is_dir": is_dir,
            "path": entry.path().canonicalize().expect("error").to_string_lossy().to_string()
        }));
    }
    tree
}

async fn handle_edit_request(request: &request_handler::HttpRequest) -> (String, Vec<u8>) {
    if request.request_type == "POST" {
        let body = request.body.clone();

        let params: Vec<&str> = str::from_utf8(body.as_bytes())
            .unwrap()
            .split('&')
            .collect();
        let mut path = String::new();

        for param in params {
            let parts: Vec<&str> = param.split('=').collect();
            if parts.len() == 2 {
                if parts[0] == "path" {
                    path = urlencoding::decode(parts[1]).unwrap().to_string();
                }
            }
        }

        // Base directory for secured files
        let base_dir = "/home/zico/zerver/website/secured/obsidian";

        // Avoid double appending the base path
        let full_path = if path.starts_with(base_dir) {
            path.clone() // Path is already full
        } else {
            format!("{}/{}", base_dir, path.trim_start_matches('/'))
        };
        println!("Requested file path: {}", full_path);

        // Verify the file exists and is within the base directory
        if Path::new(&full_path).exists() && Path::new(&full_path).is_file() {
            let content = std::fs::read_to_string(&full_path).unwrap_or_else(|_| String::new());
            (
                "HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\n".to_string(),
                content.into_bytes(),
            )
        } else {
            (
                "HTTP/1.1 404 Not Found\r\nContent-Type: text/plain\r\n\r\n".to_string(),
                b"File not found".to_vec(),
            )
        }
    } else {
        (
            "HTTP/1.1 405 Method Not Allowed\r\nContent-Type: text/plain\r\n\r\n".to_string(),
            b"Only POST method is allowed".to_vec(),
        )
    }
}

async fn handle_overwrite_request(request: &request_handler::HttpRequest) -> (String, Vec<u8>) {
    if request.request_type == "POST" {
        let body = request.body.clone();
        let mut path = String::new();
        let mut content =String::new();

        // Base directory for secured files
        let base_dir = "/home/zico/zerver/website/secured/obsidian";

        let params: Vec<&str> = str::from_utf8(body.as_bytes())
            .unwrap()
            .split('&')
            .collect();


        for param in params {
            if let Some((key,value)) = param.split_once('='){
                let value = value.replace('+'," ");
                let decoded_key = urlencoding::decode(key).unwrap_or_default();
                let decoded_value = urlencoding::decode(&value).unwrap_or_default();

                match decoded_key.as_ref() {
                    "path" => path = decoded_value.to_string(),
                    "content" => content = decoded_value.to_string(),
                    _ => {}
                }
            }
        }

        println!("PATH: {}", path);
        println!("CONTENT: {}", content);

        // Avoid double appending the base path
        let full_path = if path.starts_with(base_dir) {
            path.clone() // Path is already full
        } else {
            format!("{}/{}", base_dir, path.trim_start_matches('/'))
        };
        println!("Requested file path: {}", full_path);

        // Create dirs that we might need 
        let path_path = std::path::Path::new(&path);
        let prefix = path_path.parent().unwrap();
        std::fs::create_dir_all(prefix).unwrap();

        let mut f = std::fs::OpenOptions::new().write(true).truncate(true).open(path).expect("issue creating file object");
        f.write_all(content.as_bytes()).expect("issue writing file");
        f.flush().expect("issue flushing file");

        let content = std::fs::read_to_string(&full_path).unwrap_or_else(|_| String::new());
            (
                "HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\n".to_string(),
                content.into_bytes(),
            )
    } else {
        (
            "HTTP/1.1 405 Method Not Allowed\r\nContent-Type: text/plain\r\n\r\n".to_string(),
            b"Only POST method is allowed".to_vec(),
        )
    }
}

async fn handle_tree_request(request: &request_handler::HttpRequest) -> (String, Vec<u8>) {
    if request.request_type == "POST" {
        let body = request.body.clone();
        let params: serde_json::Value = serde_json::from_slice(body.as_bytes()).unwrap();
        let path = params.get("path").and_then(|v| v.as_str()).unwrap_or("");

        let tree = generate_file_tree(path);
        let response_body = serde_json::to_string(&tree).unwrap();

        (
            "HTTP/1.1 200 OK\r\nContent-Type: application/json\r\n\r\n".to_string(),
            response_body.into_bytes(),
        )
    } else {
        (
            "HTTP/1.1 405 Method Not Allowed\r\nContent-Type: text/plain\r\n\r\n".to_string(),
            b"Only POST method is allowed".to_vec(),
        )
    }
}

fn get_content_length(request: &str) -> Option<usize> {
    for line in request.lines() {
        if line.to_lowercase().starts_with("content-length:") {
            if let Some(len) = line.split(':').nth(1) {
                return len.trim().parse::<usize>().ok();
            }
        }
    }
    None
}

async fn handle_connection(
    mut stream: tokio_rustls::server::TlsStream<TcpStream>,
    session_id: Arc<Mutex<String>>,
) {
    let mut request_data = Vec::new();
    let mut buffer = [0; 1024];
    let read_timeout = Duration::from_secs(10);

    loop {
        match timeout(read_timeout, stream.read(&mut buffer)).await {
            Ok(Ok(0)) => break, // Connection closed by client
            Ok(Ok(size)) => {
                request_data.extend_from_slice(&buffer[..size]);

                // Check if we have reached the end of the headers
                if let Ok(request_str) = String::from_utf8(request_data.clone()) {
                    if request_str.contains("\r\n\r\n") {
                        // End of headers detected
                        if let Some(content_length) = get_content_length(&request_str) {
                            if request_data.len()
                                >= content_length + request_str.find("\r\n\r\n").unwrap() + 4
                            {
                                println!("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
                                println!("Full request recieved");
                                break; // Full request received
                            }
                        } else {
                            println!("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
                            println!("No content length, assumed end");
                            break; // No Content-Length, assume end of request
                        }
                    }
                }
            }
            Ok(Err(e)) => {
                eprintln!("Error reading stream: {}", e);
                return;
            }
            Err(_) => {
                eprintln!("Read operation timed out");
                let response = b"HTTP/1.1 408 Request Timeout\r\n\r\nRequest timed out";
                stream.write_all(response).await.unwrap();
                return;
            }
        }
    }

    // Convert the accumulated data to a UTF-8 string
    let request_string = match String::from_utf8(request_data) {
        Ok(s) => s,
        Err(_) => {
            let response = b"HTTP/1.1 400 Bad Request\r\n\r\nInvalid UTF-8 sequence";
            stream.write_all(response).await.unwrap();
            return;
        }
    };

    println!("CONTENT:\n {}\nEND CONTENT", request_string);

    let mut cookie_to_send = "".to_owned();
    let mut authenticated: bool = false;

    let http_request: request_handler::HttpRequest =
        request_handler::http_request_from_string(&request_string);

    println!("REQUEST TYPE: \"{}\"", http_request.request_type);

    if http_request.request_type == "POST" {
        if let Some(pwd) = &http_request.pwd {
            println!("PWD: \"{}\"", pwd);
            if authentication::verify_password(pwd.to_owned()) {
                println!("TRUE");
                {
                    let mut id = session_id.lock().await;
                    *id = authentication::generate_session_id();
                    cookie_to_send = "sID=".to_owned() + &*id;
                }
            }
        }
    }

    match &http_request.cookie {
        Some(cookie) => {
            let guard = session_id.lock().await;
            if cookie == &*guard {
                authenticated = true;
            }
        }
        None => {
            println!("NO COOKIE")
        }
    }

    if http_request.request_type == "POST" && authenticated {
        if http_request.filename == "/home/zico/zerver/website/edit" {
            println!("edit");
            let response = handle_edit_request(&http_request).await;
            stream.write_all(response.0.as_bytes()).await.unwrap();
            stream.write_all(&response.1).await.unwrap();
            return;
        } else if http_request.filename == "/home/zico/zerver/website/files" {
            println!("files");
            let response = handle_tree_request(&http_request).await;
            stream.write_all(response.0.as_bytes()).await.unwrap();
            stream.write_all(&response.1).await.unwrap();
            return;
        } else if http_request.filename == "/home/zico/zerver/website/overwrite" {
            println!("overwrite");
            let response = handle_overwrite_request(&http_request).await;
            stream.write_all(response.0.as_bytes()).await.unwrap();
            stream.write_all(&response.1).await.unwrap();
            return;
        }
    }

    println!("FILENAME: {}", http_request.filename);

    println!("FILE EXT: {}", http_request.file_ext);

    println!("CONTENT TYPE: {}", http_request.content_type);
    println!(
        "BODY: {}",
        urlencoding::decode(&http_request.body).unwrap().to_string()
    );

    // Send the requested file
    let (status_line, file_content) =
                // For the website root, send the hello page
                if http_request.filename == "/home/zico/zerver/website/" {
                    (
                        "HTTP/1.1 200 OK",
                        file_handler::read_file("/home/zico/zerver/website/hello.html"),
                    )

                // If the file is valid, send it
                } else if file_handler::is_file_valid(Path::new(&http_request.filename),authenticated) {
                    // Process SSI (Server Side Includes) for any text content
                    if http_request.content_type == "text/html"
                        || http_request.content_type == "text/css"
                        || http_request.content_type == "text/javascript"
                    {
                        (
                            "HTTP/1.1 200 OK",
                            file_handler::read_file_ssi(&http_request.filename, Vec::new(),authenticated),
                        )
                    } else {
                        ("HTTP/1.1 200 OK", file_handler::read_file(&http_request.filename))
                    }

                // If the file requested is invalid or outside the website directory, send 404
                } else {
                    (
                        "HTTP/1.1 404 Not Found",
                        file_handler::read_file("/home/zico/zerver/website/404.html"),
                    )
                };

    // Generate the cookie line
    let cookie_line = format!(
        "Set-Cookie: {}; Secure; HttpOnly; SameSite=Strict\r\n",
        cookie_to_send
    );

    // Generate a response header
    let response_header = format!(
        "{}\r\nContent-Type: {}\r\n{}Content-Length: {}\r\n\r\n",
        status_line,
        http_request.content_type,
        if cookie_to_send != "" {
            cookie_line
        } else {
            "".to_string()
        },
        file_content.len()
    );

    // Convert it to bytes and add the content body
    let mut response = response_header.into_bytes();
    response.extend(file_content);

    // Write the file over the connection
    let _ = stream.write_all(&response).await;
    let _ = stream.flush().await;
}

use argon2::{
    password_hash::{Salt, SaltString},
    Argon2, PasswordHash, PasswordHasher, PasswordVerifier,
};
use std::fs;
use std::fs::read_to_string;
use std::fs::File;
use std::io::BufReader;
use std::net::SocketAddr;
use std::path::Path;
use std::str;
use std::sync::Arc;
use tokio::io::AsyncReadExt;
use tokio::io::AsyncWriteExt;
use tokio::net::TcpListener;
use tokio::net::TcpStream;
use tokio_rustls::rustls::internal::pemfile::{certs, rsa_private_keys};
use tokio_rustls::rustls::ServerConfig;
use tokio_rustls::TlsAcceptor;
mod authentication;
mod file_handler;
mod request_handler;

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

    // Setup a listener on the TLS port
    let addr: SocketAddr = "0.0.0.0:443".parse().unwrap();
    let listener = TcpListener::bind(addr).await.unwrap();

    loop {
        // Wait for a new connection
        let (stream, _) = listener.accept().await.unwrap();

        // Create a TLS object to handle the connection
        let tls_acceptor = tls_acceptor.clone();

        tokio::spawn(async move {
            // Accept the connection in a new tokio thread
            let tls_stream = match tls_acceptor.accept(stream).await {
                Ok(v) => v,
                Err(_) => return,
            };

            // Process the connection
            handle_connection(tls_stream).await;
        });
    }
}

async fn handle_connection(mut stream: tokio_rustls::server::TlsStream<TcpStream>) {
    // Read the connection request into a buffer
    let mut buffer = [0; 1024];
    match stream.read(&mut buffer).await {
        Ok(_) => {
            let mut cookie_to_send = "";
            let mut authenticated: bool = false;

            // Load that buffer into a string, return error page on bad request
            let s = match str::from_utf8(&buffer) {
                Ok(v) => v,
                Err(_) => {
                    let response = b"HTTP/1.1 400 Bad Request\r\n\r\nInvalid UTF-8 sequence";
                    stream.write_all(response).await.unwrap();
                    return;
                }
            };
            println!("CONTENT: {}", s);

            let http_request: request_handler::HttpRequest =
                request_handler::http_request_from_string(s);

            println!("REQUEST TYPE: \"{}\"", http_request.request_type);

            if http_request.request_type == "POST" {
                match http_request.pwd {
                    Some(pwd) => {
                        if authentication::verify_password(pwd) {
                            println!("TRUE");
                            cookie_to_send = "sID=tasty";
                        } else {
                            println!("FALSE");
                        }
                    }
                    None => println!("NO PWD"),
                }
            }

            match http_request.cookie {
                Some(cookie) => {
                    if cookie == "tasty" {
                        authenticated = true;
                        println!("GOOD COOKIE");
                    } else {
                        println!("BAD COOKIE \"{}\"", cookie);
                    }
                }
                None => {
                    println!("NO COOKIE")
                }
            }

            println!("FILENAME: {}", http_request.filename);

            println!("FILE EXT: {}", http_request.file_ext);

            println!("CONTENT TYPE: {}", http_request.content_type);

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

        Err(e) => {
            eprintln!("Error reading stream: {}", e);
            return;
        }
    };
}

use std::fs::File;
use std::io::BufReader;
use std::net::SocketAddr;
use std::path::Path;
use std::str;
use tokio::net::TcpListener;
use tokio::net::TcpStream;
use tokio_rustls::rustls::{ServerConfig};
use tokio_rustls::TlsAcceptor;
use tokio_rustls::rustls::internal::pemfile::{certs, rsa_private_keys};
use std::sync::Arc;
use tokio::io::AsyncReadExt;
use tokio::io::AsyncWriteExt;
use std::fs;
use argon2::{Argon2, PasswordHasher, PasswordHash, PasswordVerifier, password_hash::{Salt, SaltString}};
use std::fs::read_to_string;



fn load_tls_config() -> Arc<ServerConfig> {
    // Open the key and cert files
    let cert_file = &mut BufReader::new(File::open("/etc/letsencrypt/live/nicozucca.com/fullchain.pem").unwrap());
    let key_file = &mut BufReader::new(File::open("/etc/letsencrypt/live/nicozucca.com/privkey_rsa.pem").unwrap());

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
    config.set_single_cert(cert_chain, keys.remove(0)).expect("invalid key or certificate");

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
            let tls_stream = match tls_acceptor.accept(stream).await{
                Ok(v) => v,
                Err(_) => return};

            // Process the connection
            handle_connection(tls_stream).await;
        });
    }
}




fn is_file_valid(file_path: &Path)-> bool
{

    // Generate the website directory (which all files 
    // for general access should be under)
    let mut current_dir = match std::env::current_dir() {
        Ok(dir) => dir,
        Err(_) => return false
    };
    current_dir =current_dir.join("home/zico/zerver/website");

    // Get the path to the file we are hoping to read
    let absolute_path = match file_path.canonicalize() {
        Ok(path) => path,
        Err(_) => {return false}
    };

    // If the path to that file isn't inside the 
    // website directory, the file isn't valid.
    if !absolute_path.starts_with(&current_dir) {
        return false
    }

    // If the file doesn't exist, the file isn't 
    // valid.
    if !file_path.exists() { 
        return false
    }

    // If the file isn't a file (I.E. its a 
    // directory or something else), the file 
    // isn't valid.
    if !file_path.is_file() {return false}

    true
}

async fn handle_connection(mut stream: tokio_rustls::server::TlsStream<TcpStream>) {
    // Read the connection request into a buffer
    let mut buffer = [0; 1024];
    match stream.read(&mut buffer).await {
        Ok(_) => {

            // Load that buffer into a string, return error page on bad request
            let s = match str::from_utf8(&buffer) {
                Ok(v) => v,
                Err(_) => { 
                    let response = b"HTTP/1.1 400 Bad Request\r\n\r\nInvalid UTF-8 sequence";
                    stream.write_all(response).await.unwrap();
                    return;
                }
            };

            let request_type = {
                let vec: Vec<&str> = s.split(' ').collect();
                if vec.len() < 1 || vec[0].len() < 1{
                    "UNKNOWN".to_owned()
                } else {
                    (&vec[0][0..]).to_string()
                }
            };

        
            println!("CONTENT: {}",s);
            println!("REQUEST TYPE: \"{}\"",request_type);

            if request_type == "POST" && s.contains("psw=")
            {
                let hash_string = &fs::read_to_string("/home/zico/zerver/secrets/pwd_hash.txt").unwrap();
                let parsed_hash = PasswordHash::new(hash_string.trim()).unwrap();
                let start_bytes = s.find("psw=").unwrap_or(0) + 4;
                let mut pwd = s[start_bytes..].to_owned();

                let salt_str = "YmFkIHNhbHQh";
                let salt: Salt = salt_str.try_into().unwrap();

                let argon2 = Argon2::default();
                let hash  = argon2.hash_password(pwd.as_bytes(),salt).unwrap();

                if Argon2::default().verify_password(pwd.as_bytes(), &parsed_hash).is_ok()
                {
                    println!("TRUE");
                } else {
                    println!("FALSE");
                }
                println!("HASH: \"{}\"",hash);
            }
            // Get the requested file from the request string.
            // If there doesn't seem to be a requested file, 
            // substitute the website root.
            let filename = {
                let vec: Vec<&str> = s.split(' ').collect();
                if vec.len() < 2 || vec[1].len() < 2{
                    "/home/zico/zerver/website/".to_owned()
                } else
                {
                    "/home/zico/zerver/website/".to_owned() + &vec[1][1..]
                }
            };
            println!("FILENAME: {}",filename);
            
            // Get the file extension thats been requested
            let file_ext = {
                let vec: Vec<&str> = filename.split('.').collect();
                if vec.len() >= 2{
                    &vec[1][..]
                } else 
                {
                    ""
                }
            };
            println!("FILE EXT: {}",file_ext);
        
            // Convert the extension to a content type. Assume text/html
            // if file extension is unknown.
            let content_type = match file_ext{
                "html" => "text/html",
                "png" => "image/png",
                "jpg" => "image/jpeg",
                "gif" => "image/gif",
                "js" => "text/javascript",
                "css" => "text/css",
                _ => "text/html"
            };
            println!("CONTENT TYPE: {}",content_type);
            
            // Send the requested file
            let (status_line, file_content) = if filename == "/home/zico/zerver/website/" {

                // For the website root, send the hello page
                ("HTTP/1.1 200 OK", read_file("/home/zico/zerver/website/hello.html"))

            // If the file is valid, send it
            } else if is_file_valid(Path::new(&filename)){

                // Process SSI (Server Side Includes) for any text content
                if content_type == "text/html" || content_type == "text/css" || content_type == "text/javascript"
                {
                    ("HTTP/1.1 200 OK", read_file_ssi(&filename, Vec::new()))
                }
                else
                {
                    ("HTTP/1.1 200 OK", read_file(&filename))
                }

            // If the file requested is invalid or outside the website directory, send 404
            } else {
                ("HTTP/1.1 404 Not Found", read_file("/home/zico/zerver/website/404.html"))
            };
        
            // Generate a response header
            let response = format!(
                "{}\r\nContent-Type: {}\r\nContent-Length: {}\r\n\r\n",
                status_line,
                content_type,
                file_content.len()
            );

            // Convert it to bytes and add the content body
            let mut response = response.into_bytes();
            response.extend(file_content);
        
            // Write the file over the connection
            let _  = stream.write_all(&response).await;
            let _ = stream.flush().await;
        },

        Err(e) => { 
            eprintln!("Error reading stream: {}",e);
            return;
        }
    };
}

// Find a subsequence in a sequence of u8's (Just String::find but for Vec<u8>)
// https://stackoverflow.com/questions/35901547/how-can-i-find-a-subsequence-in-a-u8-slice
fn find_subsequence(haystack: &[u8], needle: &[u8]) -> Option<usize> {
    haystack.windows(needle.len()).position(|window| window == needle)
}

// Read a file, but process it for server-side includes
fn read_file_ssi(filename: &str, param: Vec<&str>) -> Vec<u8> {
    // Define the tokens that we are searching for
    let include_token = b"<!-- #include ";
    let end_token = b" -->";
 
    // Read the file in
    let mut file_string =fs::read(filename).unwrap();

    // First, search and replace the arg tags
    for (i, el) in param.iter().enumerate()
    {
        println!("Replaceing any ${i} with {el}");
        let temp_file_string = str::from_utf8(&file_string).unwrap().replace(&("$".to_owned()+&i.to_string()),el);
        file_string = temp_file_string.as_bytes().to_vec();
    }

    // Try to find an include token
    let mut find_include = find_subsequence(&file_string,include_token);

    // If we've got at least 1 SSI token, run through the loop to replace it with its content.
    while find_include != None
    {
        // Get a substring of everything after the include token, and search that substring for the end token.
        let middle_end_str = &file_string[find_include.unwrap()..];
        let find_end = find_subsequence(middle_end_str,end_token);

        // If we haven't found the end token, the SSI was done incorrectly. #NotMyProblem
        if find_end == None
        {
            return b"Unable to find end of include".to_vec();
        }

        // Otherwise, lets make a clone of the existing content so that we can rebuild it and reference the previous content at the same time.
        let temp_file_string = file_string.clone();

        // Clear the existing string, and copy everything leading up to the include statement back onto it.
        file_string.clear();
        file_string.extend(&temp_file_string[..find_include.unwrap()]);
        
        // Pull the text from between the tokens and populate it into the ssi_filename we are looking for
        let included_str = &String::from_utf8(temp_file_string[find_include.unwrap() + include_token.len()..find_include.unwrap()+find_end.unwrap()].to_vec()).unwrap();
        println!("SSI: \"{}\"",included_str);
        let included_parts = included_str.split(" ").collect::<Vec<&str>>();
        let mut ssi_filename ="/home/zico/zerver/website/".to_owned(); 
        if included_parts.len() > 0
        {
        ssi_filename +=included_parts[0];
        }

        // Check if the ssi_filename is valid, and copy the content onto the file_string, or copy an error message in its place.
        if is_file_valid(Path::new(&ssi_filename))
        {
            file_string.extend(read_file_ssi(&ssi_filename, included_parts));
        }
        else
        {
            file_string.extend(b"Error: Unable to find ssi.");
        }

        // Copy back everything that was after the end token
        file_string.extend(&temp_file_string[find_include.unwrap()+find_end.unwrap() + end_token.len()..]);

        // Search for another include token, so that we can loop if we need to
        find_include = find_subsequence(&file_string,include_token);
    }

    return file_string;
}

// Read a file as-is
fn read_file(filename: &str) -> Vec<u8> {
    return fs::read(filename).unwrap()
}

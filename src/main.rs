use zerver::ThreadPool;
use std::io::prelude::*;
use std::net::TcpListener;
use std::net::TcpStream;
use std::str;
use std::path::{Path};
use std::fs;

fn main() {
    let listener = TcpListener::bind("0.0.0.0:80").unwrap();
    let pool = ThreadPool::new(4);

    for stream in listener.incoming() {
        let stream = stream.unwrap();

        pool.execute(|| {
            handle_connection(stream);
        });
    }
}


fn is_file_valid(file_path: &Path)-> bool
{
    let mut current_dir = match std::env::current_dir() {
        Ok(dir) => dir,
        Err(_) => return false
    };

    current_dir =current_dir.join("home/zico/zerver/website");

    let absolute_path = match file_path.canonicalize() {
        Ok(path) => path,
        Err(_) => {return false}
    };

    if !absolute_path.starts_with(&current_dir) {
        return false
    }

    if !file_path.exists() { 
        return false
    }

    if !file_path.is_file() {return false}

    true
}

fn handle_connection(mut stream: TcpStream) {
    let mut buffer = [0; 1024];
    stream.read(&mut buffer).unwrap();

    let s = match str::from_utf8(&buffer) {
        Ok(v) => v,
        Err(_) => { 
            let response = b"HTTP/1.1 400 Bad Request\r\n\r\nInvalid UTF-8 sequence";
            stream.write_all(response).unwrap();
            return;
        }
    };

    let filename = {
        let vec: Vec<&str> = s.split(' ').collect();
        if vec.len() < 2{
            "/home/zico/zerver/website/".to_owned()
        } else
        {
            "/home/zico/zerver/website/".to_owned() + &vec[1][1..]
        }
    };
    
    let file_ext = {
        let vec: Vec<&str> = filename.split('.').collect();
        if vec.len() >= 2{
            &vec[1][..]
        } else 
        {
            ""
        }
    };

    let content_type = match file_ext{
        "html" => "text/html",
        "png" => "image/png",
        "jpg" => "image/jpeg",
        "gif" => "image/gif",
        "js" => "text/javascript",
        "css" => "text/css",
        _ => "text/html"
    };

    let (status_line, file_content) = if filename == "/home/zico/zerver/website/" {
        ("HTTP/1.1 200 OK", read_file("/home/zico/zerver/website/hello.html"))
    } else if is_file_valid(Path::new(&filename)){
        if content_type == "text/html" || content_type == "text/css" || content_type == "text/javascript"
        {
            ("HTTP/1.1 200 OK", read_file_ssi(&filename))
        }
        else
        {
            ("HTTP/1.1 200 OK", read_file(&filename))
        }
    } else {
        ("HTTP/1.1 404 Not Found", read_file("/home/zico/zerver/website/404.html"))
    };



    let response = format!(
        "{}\r\nContent-Type: {}\r\nContent-Length: {}\r\n\r\n",
        status_line,
        content_type,
        file_content.len()
    );
    let mut response = response.into_bytes();
    response.extend(file_content);

    stream.write_all(&response).unwrap();
    stream.flush().unwrap();
}

// Find a subsequence in a sequence of u8's (Just String::find but for Vec<u8>)
// https://stackoverflow.com/questions/35901547/how-can-i-find-a-subsequence-in-a-u8-slice
fn find_subsequence(haystack: &[u8], needle: &[u8]) -> Option<usize> {
    haystack.windows(needle.len()).position(|window| window == needle)
}

// Read a file, but process it for server-side includes
fn read_file_ssi(filename: &str) -> Vec<u8> {
    // Define the tokens that we are searching for
    let include_token = b"<!-- #include ";
    let end_token = b" -->";
    
    // Read the file in
    let mut file_string =fs::read(filename).unwrap();

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
        let incuded_str = &temp_file_string[find_include.unwrap() + include_token.len()..find_include.unwrap()+find_end.unwrap()];
        let ssi_filename ="/home/zico/zerver/website/".to_owned() + &String::from_utf8(incuded_str.to_vec()).unwrap();

        // Check if the ssi_filename is valid, and copy the content onto the file_string, or copy an error message in its place.
        if is_file_valid(Path::new(&ssi_filename))
        {
            file_string.extend(read_file_ssi(&ssi_filename));
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
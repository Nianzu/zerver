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
        Err(_) => {println!("Fail is path");return false}
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

// https://stackoverflow.com/questions/35901547/how-can-i-find-a-subsequence-in-a-u8-slice
fn find_subsequence(haystack: &[u8], needle: &[u8]) -> Option<usize> {
    haystack.windows(needle.len()).position(|window| window == needle)
}

fn read_file_ssi(filename: &str) -> Vec<u8> {
    print!("Got ssi file\n");
    let mut file_string =fs::read(filename).unwrap();

    let include_token = b"<!-- #include ";
    let end_token = b" -->";

    let mut find_include = find_subsequence(&file_string,include_token);

    while find_include != None
    {
        print!("Found replaceable include\n");
        let middle_end_str = &file_string[find_include.unwrap()..];
        let find_end = find_subsequence(middle_end_str,end_token);
        if find_end == None
        {
            return b"Unable to find end of include".to_vec();
        }
        let temp_file_string = file_string.clone();
        let incuded_str = &temp_file_string[find_include.unwrap() + include_token.len()..find_include.unwrap()+find_end.unwrap()];
        file_string.clear();
        file_string.extend(&temp_file_string[..find_include.unwrap()]);

        let ssi_filename ="/home/zico/zerver/website/".to_owned() + &String::from_utf8(incuded_str.to_vec()).unwrap();

        if is_file_valid(Path::new(&ssi_filename))
        {
            file_string.extend(read_file_ssi(&ssi_filename));
        }
        else
        {
            file_string.extend(b"Error: Unable to find ssi.");
        }
        file_string.extend(&temp_file_string[find_include.unwrap()+find_end.unwrap() + end_token.len()..]);
        find_include = find_subsequence(&file_string,include_token);
    }

    return file_string;
}

fn read_file(filename: &str) -> Vec<u8> {
    return fs::read(filename).unwrap()
}
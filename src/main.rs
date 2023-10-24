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

    println!("Shutting down.");
}


fn is_file_valid(file_path: &Path)-> bool
{
    let mut current_dir = match std::env::current_dir() {
        Ok(dir) => dir,
        Err(_) => return false
    };

    current_dir =current_dir.join("home/zico/zerver/website");
    println!("CURRECT DIRECTORY \'{}\'",current_dir.display());

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
        Err(e) => panic!("Invalid UTF-8 sequence: {}", e),
    };
    println!("{:#?}",s);

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
    
    println!("Filename \'{filename}\'");
    println!("File Ext \'{file_ext}\'");

    let (status_line, file_content) = if filename == "/home/zico/zerver/website/" {
        ("HTTP/1.1 200 OK", read_file("/home/zico/zerver/website/hello.html"))
    } else if is_file_valid(Path::new(&filename)){
        ("HTTP/1.1 200 OK", read_file(&filename))
    } else {
        ("HTTP/1.1 404 Not Found", read_file("/home/zico/zerver/website/404.html"))
    };

    let content_type = match file_ext{
        "html" => "text/html",
        "png" => "image/png",
        "js" => "text/javascript",
        "css" => "text/css",
        _ => "text/html"
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

fn read_file(filename: &str) -> Vec<u8> {
    fs::read(filename).unwrap()
}
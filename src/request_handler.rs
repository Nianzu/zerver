use std::collections::HashMap;

pub struct HttpRequest {
    pub request_type: String,
    pub filename: String,
    pub file_ext: String,
    pub pwd: Option<String>,
    pub content_type: String,
    pub cookie: Option<String>,
    pub body: String,
}

pub fn http_request_from_string(s: &str) -> HttpRequest {
    let cleaned = s.replace("\0", "");
    let vec: Vec<&str> = s.split(' ').collect();
    
    let request_type_local: String = {
        if vec.len() < 1 || vec[0].len() < 1 {
            "UNKNOWN".to_owned()
        } else {
            (&vec[0][0..]).to_string()
        }
    };

    let filename_local: String = {
        if vec.len() < 2 || vec[1].len() < 2 {
            "/home/zico/zerver/website/".to_owned()
        } else {
            "/home/zico/zerver/website/".to_owned() + &vec[1][1..]
        }
    };

    let file_ext_local: String = {
        let vec: Vec<&str> = filename_local.split('.').collect();
        if vec.len() >= 2 {
            (&vec[1][..]).to_string()
        } else {
            "".to_owned()
        }
    };

    let pwd_local: Option<String> = get_pwd(&cleaned);

    let content_type_local: &str = match &file_ext_local[..] {
        "html" => "text/html",
        "png" => "image/png",
        "jpg" => "image/jpeg",
        "gif" => "image/gif",
        "js" => "text/javascript",
        "css" => "text/css",
        _ => "text/html",
    };
    let local_cookie = get_cookie(&cleaned);

    // Split headers and body using the "\r\n\r\n" separator
    let body_local = if let Some(body_start) = cleaned.split("\r\n\r\n").nth(1) {
        body_start.trim().to_string()
    } else {
        String::new()
    };

    HttpRequest {
        request_type: request_type_local,
        filename: filename_local,
        file_ext: file_ext_local,
        pwd: pwd_local,
        content_type: content_type_local.to_string(),
        cookie: local_cookie,
        body: body_local,
    }
}

fn get_pwd(s: &str) -> Option<String> {
    if let Some(password_section) = s.split("psw=").nth(1) {
        Some(password_section.lines().next().unwrap_or("").replace("\n", "").replace("\r", "").trim().to_owned())
    } else {
        None
    }
}


fn get_cookie(s: &str) -> Option<String> {
    if s.contains("Cookie: ") {
        Some(
            s.split("Cookie: ").collect::<Vec<_>>()[1]
                .lines()
                .collect::<Vec<_>>()[0]
                .split("=")
                .collect::<Vec<_>>()[1]
                .to_string(),
        )
    } else {
        None
    }
}

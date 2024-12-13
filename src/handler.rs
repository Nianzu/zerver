pub struct HttpRequest {
    pub request_type: String,
    pub filename: String,
    pub file_ext: String,
}

pub fn http_request_from_string(s: &str) -> HttpRequest {
    let request_local: String = {
        let vec: Vec<&str> = s.split(' ').collect();
        if vec.len() < 1 || vec[0].len() < 1 {
            "UNKNOWN".to_owned()
        } else {
            (&vec[0][0..]).to_string()
        }
    };

    let filename_local = {
        let vec: Vec<&str> = s.split(' ').collect();
        if vec.len() < 2 || vec[1].len() < 2 {
            "/home/zico/zerver/website/".to_owned()
        } else {
            "/home/zico/zerver/website/".to_owned() + &vec[1][1..]
        }
    };

    let file_ext_local = {
        let vec: Vec<&str> = filename_local.split('.').collect();
        if vec.len() >= 2 {
            (&vec[1][..]).to_string()
        } else {
            "".to_owned()
        }
    };

    HttpRequest {
        request_type: request_local,
        filename: filename_local,
        file_ext: file_ext_local,
    }
}

pub struct HttpRequest {
    pub request_type: String,
}

pub fn http_request_from_string(s: &str) -> HttpRequest {
    let request: String = {
        let vec: Vec<&str> = s.split(' ').collect();
        if vec.len() < 1 || vec[0].len() < 1 {
            "UNKNOWN".to_owned()
        } else {
            (&vec[0][0..]).to_string()
        }
    };

    HttpRequest {
        request_type: request,
    }
}

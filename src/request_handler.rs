use argon2::{
    password_hash::{Salt, SaltString},
    Argon2, PasswordHash, PasswordHasher, PasswordVerifier,
};
use std::fs;

pub struct HttpRequest {
    pub request_type: String,
    pub filename: String,
    pub file_ext: String,
    pub pwd: Option<String>,
}

pub fn http_request_from_string(s: &str) -> HttpRequest {
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
    let pwd_local: Option<String> = get_pwd(s);

    HttpRequest {
        request_type: request_type_local,
        filename: filename_local,
        file_ext: file_ext_local,
        pwd: pwd_local,
    }
}

fn get_pwd(s: &str) -> Option<String> {
    if s.contains("psw=") {
        Some(
            s.split("psw=").collect::<Vec<_>>()[1]
                .lines()
                .collect::<Vec<_>>()[0]
                .to_string(),
        )
    } else {
        None
    }
}

pub fn verify_password(pwd: String) -> bool {
    let hash_string = &fs::read_to_string("/home/zico/zerver/secrets/pwd_hash.txt").unwrap();
    let parsed_hash = PasswordHash::new(hash_string.trim()).unwrap();

    let salt_str = "YmFkIHNhbHQh";
    let salt: Salt = salt_str.try_into().unwrap();

    let argon2 = Argon2::default();
    let hash = argon2.hash_password(pwd.as_bytes(), salt).unwrap();

    Argon2::default()
        .verify_password(pwd.as_bytes(), &parsed_hash)
        .is_ok()
}

use argon2::{
    password_hash::{Salt, SaltString},
    Argon2, PasswordHash, PasswordHasher, PasswordVerifier,
};
use rand::rngs::OsRng;
use rand::Rng;
use std::fs;

pub fn verify_password(pwd: String) -> bool {
    let hash_string = &fs::read_to_string("/home/zico/zerver/secrets/pwd_hash.txt").unwrap();
    let parsed_hash = PasswordHash::new(hash_string.trim()).unwrap();

    // let salt_str = "YmFkIHNhbHQh";
    // let salt: Salt = salt_str.try_into().unwrap();

    // let argon2 = Argon2::default();
    // let hash = argon2.hash_password(pwd.as_bytes(), salt).unwrap();
    // println!("{}",hash);

    Argon2::default()
        .verify_password(pwd.as_bytes(), &parsed_hash)
        .is_ok()
}

pub fn generate_session_id() -> String {
    // Desired session ID length
    let id_length = 32;
    // Allowed characters
    let charset: &[u8] = b"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let mut session_id = String::with_capacity(id_length);
    let mut rng = OsRng;
    for _ in 0..id_length {
        // Securely select a random character from the charset
        let idx = rng.gen_range(0..charset.len());
        session_id.push(charset[idx] as char);
    }

    session_id
}

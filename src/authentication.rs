use argon2::{
    password_hash::{Salt, SaltString},
    Argon2, PasswordHash, PasswordHasher, PasswordVerifier,
};
use std::fs;

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

use std::fs;
use std::path::Path;
use std::str;

pub fn is_file_valid(file_path: &Path, authenticated: bool) -> bool {
    // Generate the website directory (which all files
    // for general access should be under)
    let mut current_dir = match std::env::current_dir() {
        Ok(dir) => dir,
        Err(_) => return false,
    };
    current_dir = current_dir.join("home/zico/zerver/website");

    // Get the path to the file we are hoping to read
    let absolute_path = match file_path.canonicalize() {
        Ok(path) => path,
        Err(_) => return false,
    };

    // If the path to that file isn't inside the
    // website directory, the file isn't valid.
    if !absolute_path.starts_with(&current_dir) {
        return false;
    }

    // If the path is inside the secure zone, but we aren't authenticated, the
    // file isn't valid
    let secured_dir = current_dir.join("secured");
    if absolute_path.starts_with(&secured_dir) && !authenticated {
        return false;
    }

    // If the file doesn't exist, the file isn't
    // valid.
    if !file_path.exists() {
        return false;
    }

    // If the file isn't a file (I.E. its a
    // directory or something else), the file
    // isn't valid.
    if !file_path.is_file() {
        return false;
    }

    true
}

// Find a subsequence in a sequence of u8's (Just String::find but for Vec<u8>)
// https://stackoverflow.com/questions/35901547/how-can-i-find-a-subsequence-in-a-u8-slice
fn find_subsequence(haystack: &[u8], needle: &[u8]) -> Option<usize> {
    haystack
        .windows(needle.len())
        .position(|window| window == needle)
}

// Read a file, but process it for server-side includes
pub fn read_file_ssi(filename: &str, param: Vec<&str>, authenticated: bool) -> Vec<u8> {
    // Define the tokens that we are searching for
    let include_token = b"<!-- #include ";
    let end_token = b" -->";

    // Read the file in
    let mut file_string = fs::read(filename).unwrap();

    // First, search and replace the arg tags
    for (i, el) in param.iter().enumerate() {
        println!("Replaceing any ${i} with {el}");
        let temp_file_string = str::from_utf8(&file_string)
            .unwrap()
            .replace(&("$".to_owned() + &i.to_string()), el);
        file_string = temp_file_string.as_bytes().to_vec();
    }

    // Try to find an include token
    let mut find_include = find_subsequence(&file_string, include_token);

    // If we've got at least 1 SSI token, run through the loop to replace it with its content.
    while find_include != None {
        // Get a substring of everything after the include token, and search that substring for the end token.
        let middle_end_str = &file_string[find_include.unwrap()..];
        let find_end = find_subsequence(middle_end_str, end_token);

        // If we haven't found the end token, the SSI was done incorrectly. #NotMyProblem
        if find_end == None {
            return b"Unable to find end of include".to_vec();
        }

        // Otherwise, lets make a clone of the existing content so that we can rebuild it and reference the previous content at the same time.
        let temp_file_string = file_string.clone();

        // Clear the existing string, and copy everything leading up to the include statement back onto it.
        file_string.clear();
        file_string.extend(&temp_file_string[..find_include.unwrap()]);

        // Pull the text from between the tokens and populate it into the ssi_filename we are looking for
        let included_str = &String::from_utf8(
            temp_file_string[find_include.unwrap() + include_token.len()
                ..find_include.unwrap() + find_end.unwrap()]
                .to_vec(),
        )
        .unwrap();
        println!("SSI: \"{}\"", included_str);
        let included_parts = included_str.split(" ").collect::<Vec<&str>>();
        let mut ssi_filename = "/home/zico/zerver/website/".to_owned();
        if included_parts.len() > 0 {
            ssi_filename += included_parts[0];
        }

        // Check if the ssi_filename is valid, and copy the content onto the file_string, or copy an error message in its place.
        if is_file_valid(Path::new(&ssi_filename), authenticated) {
            file_string.extend(read_file_ssi(&ssi_filename, included_parts, authenticated));
        } else {
            file_string.extend(b"Error: Unable to find ssi.");
        }

        // Copy back everything that was after the end token
        file_string.extend(
            &temp_file_string[find_include.unwrap() + find_end.unwrap() + end_token.len()..],
        );

        // Search for another include token, so that we can loop if we need to
        find_include = find_subsequence(&file_string, include_token);
    }

    return file_string;
}

// Read a file as-is
pub fn read_file(filename: &str) -> Vec<u8> {
    return fs::read(filename).unwrap();
}

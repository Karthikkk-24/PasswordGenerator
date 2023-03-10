let password = document.getElementById('password');
let uppercase = document.getElementById('uppercase');
let numbers = document.getElementById('numbers');
let specialcharacters = document.getElementById('specialcharacters');

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecial) {
    let characterSet = "";
    let password = "";

    if (includeLowercase) {
        characterSet += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeUppercase) {
        characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumbers) {
        characterSet += "0123456789";
    }
    if (includeSpecial) {
        characterSet += "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";
    }

    for (let i = 0; i < length; i++) {
        password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }
    return password;
}

function generate_password() {
    password.value = generatePassword(12, true, (uppercase.checked), (numbers.checked), (specialcharacters.checked));
}

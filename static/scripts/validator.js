function validateFullName(fullName) {
    const nameRegex = /^[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+$/;
    return nameRegex.test(fullName.trim());
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

function validatePhone(phone) {
    const digits = phone.replace(/\D/g, '');
    return digits.length === 11 && digits.startsWith('7');
}

function validateUsername(username) {
    return username.trim().length >= 3;
}

function validatePassword(password) {
    return password.length >= 8;
}

function validatePasswordMatch(password, confirmPassword) {
    return password === confirmPassword;
}

function validatePolicy(checkbox) {
    return checkbox.checked;
}

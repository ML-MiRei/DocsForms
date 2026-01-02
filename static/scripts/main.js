var openMenuButton = document.querySelector('.menu__btn');
var menu = document.querySelector('.menu__list');

openMenuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const togglePassword = document.getElementById('togglePassword');
const logPassword = document.getElementById('logPassword');

togglePassword.addEventListener('click', function () {
    const type = logPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    logPassword.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Показать' : 'Скрыть';
});

const loginForm = document.getElementById('loginForm');
const supportForm = document.getElementById('supportForm');
const emailError = document.getElementById('supEmailError');
const messageError = document.getElementById('supMessageError');
const loginError = document.getElementById('loginError');
const passwordError = document.getElementById('passwordError');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const login = document.getElementById('modalLogin').value.trim();
    const password = document.getElementById('logPassword').value.trim();
    let isValid = true;

    loginError.style.display = 'none';
    passwordError.style.display = 'none';

    if (!login) {
        loginError.style.display = 'block';
        isValid = false;
    }

    if (!password) {
        passwordError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Вход выполнен успешно!');
        myModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        myModal.dispose();
    }
});

supportForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('supEmail').value.trim();
    const message = document.getElementById('supMessage').value.trim();
    let isValid = true;

    emailError.style.display = 'none';
    messageError.style.display = 'none';

    if (!validateEmail(email)) {
        emailError.style.display = 'block';
        isValid = false;
    }

    if (!message) {
        messageError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Отзыв отправлен!');
        myModal = bootstrap.Modal.getInstance(document.getElementById('supportModal'));
        myModal.hide();
    }
});

document.getElementById('registerButton').addEventListener('click', function () {
    alert('Переход к регистрации');
});

document.querySelector('.forgot-link').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Восстановление пароля');
});

document.querySelectorAll('.password-toggle').forEach(button => {
    button.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        console(targetId);
        const passwordInput = document.getElementById(targetId);
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.textContent = type === 'password' ? 'Показать' : 'Скрыть';
    });
});

const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 0) {
        if (value[0] === '7' || value[0] === '8') {
            value = '7' + value.substring(1);
        } else if (value[0] === '9') {
            value = '7' + value;
        }
    }

    let formattedValue = '+7';
    if (value.length > 1) {
        formattedValue += ' (' + value.substring(1, 4);
    }
    if (value.length >= 4) {
        formattedValue += ') ' + value.substring(4, 7);
    }
    if (value.length >= 7) {
        formattedValue += '-' + value.substring(7, 9);
    }
    if (value.length >= 9) {
        formattedValue += '-' + value.substring(9, 11);
    }

    e.target.value = formattedValue;
});

const registerForm = document.getElementById('registerForm');
const errorMessages = document.querySelectorAll('.error-message');

function resetErrors() {
    errorMessages.forEach(error => {
        error.classList.remove('error-visible');
    });
}

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

function showError(errorId) {
    document.getElementById(errorId).classList.add('error-visible');
}

registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    resetErrors();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const policyCheckbox = document.getElementById('policyAgreement');

    let isValid = true;

    if (!validateFullName(fullName)) {
        showError('fullNameError');
        isValid = false;
    }

    if (!validateEmail(email)) {
        showError('emailError');
        isValid = false;
    }

    if (!validatePhone(phone)) {
        showError('phoneError');
        isValid = false;
    }

    if (!validateUsername(username)) {
        showError('usernameError');
        isValid = false;
    }

    if (!validatePassword(password)) {
        showError('passwordError');
        isValid = false;
    }

    if (!validatePasswordMatch(password, confirmPassword)) {
        showError('confirmPasswordError');
        isValid = false;
    }

    if (!validatePolicy(policyCheckbox)) {
        showError('policyError');
        isValid = false;
    }

    if (isValid) {
        const registerButton = document.getElementById('registerButton');
        registerButton.textContent = 'Регистрация...';
        registerButton.disabled = true;

        setTimeout(() => {
            alert('Регистрация успешно завершена! Добро пожаловать в личный кабинет.');
            registerButton.textContent = 'Зарегистрироваться';
            registerButton.disabled = false;
            // В реальном приложении здесь будет перенаправление
        }, 1500);
    }
});

document.getElementById('policyLink').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Открытие политики обработки персональных данных');
});

const inputs = document.querySelectorAll('.form-input');
inputs.forEach(input => {
    input.addEventListener('blur', function () {
        const errorId = this.id + 'Error';
        const errorElement = document.getElementById(errorId);
        if (errorElement && errorElement.classList.contains('error-visible')) {
            errorElement.classList.remove('error-visible');
        }
    });
});
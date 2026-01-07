const togglePasswords = document.getElementsByName('togglePassword');
togglePasswords.forEach((togglePassword) => {
    togglePassword.addEventListener('click', function (ev) {
        const logPassword = document.getElementById(ev.target.value);

        const type = logPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        logPassword.setAttribute('type', type);
        this.textContent = type === 'password' ? 'Показать' : 'Скрыть';
    });
});

const registerForm = document.getElementById('registerForm');
const errorMessages = document.querySelectorAll('.error-message');

function resetErrors() {
    errorMessages.forEach(error => {
        error.classList.remove('error-visible');
    });
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

         alert('Регистрация успешно завершена! Добро пожаловать в личный кабинет.');
            registerButton.textContent = 'Зарегистрироваться';
            registerButton.disabled = false;
            window.location.replace("/");
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

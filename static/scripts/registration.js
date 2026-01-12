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

registerForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    resetErrors();

    const payload = {
        fullName: document.getElementById('fullName').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        login: document.getElementById('login').value.trim(),
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value
    };

    let isValid = true;

    // if (!validateFullName(payload.fullName)) { showError('fullNameError'); isValid = false; }
    // if (!validateEmail(payload.email)) { showError('emailError'); isValid = false; }
    // if (!validatePhone(payload.phone)) { showError('phoneError'); isValid = false; }
    // if (!validateUsername(payload.username)) { showError('usernameError'); isValid = false; }
    // if (!validatePassword(payload.password)) { showError('passwordError'); isValid = false; }
    // if (!validatePasswordMatch(payload.password, payload.confirmPassword)) {
    //     showError('confirmPasswordError');
    //     isValid = false;
    // }

    if (isValid) {
        const registerButton = document.getElementById('registerButton');
        registerButton.textContent = 'Регистрация...';
        registerButton.disabled = true;

        alert('Регистрация успешно завершена! Добро пожаловать в личный кабинет.');

        try {
            const response = await fetch('http://127.0.0.1:5000/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (!response.ok) {
                alert(result.error || 'Ошибка регистрации');
                return;
            }

            window.location.replace('/');

        } catch (err) {
            console.error('Ошибка при регистрации:', err);
            alert(err);
        } finally {
            registerButton.disabled = false;
            registerButton.textContent = 'Зарегистрироваться';
        }
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

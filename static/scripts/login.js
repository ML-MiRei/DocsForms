const loginForm = document.getElementById('loginForm');
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
        sendLoginData(login, password);
    }
});

document.querySelector('.forgot-link').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Восстановление пароля');
});

const togglePassword = document.getElementById('togglePassword');
togglePassword.addEventListener('click', function (ev) {
    const logPassword = document.getElementById('logPassword');

    const type = logPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    logPassword.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Показать' : 'Скрыть';
});

async function sendLoginData(login, password) {
    try {
        const submitBtn = loginForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Отправка...';
        submitBtn.disabled = true;

        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login: login,
                password: password
            })
        });

        const result = await response.json();

        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;

        if (response.ok && result.success) {

            alert(result.message || 'Вход выполнен успешно!');

            const myModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
            if (myModal) {
                myModal.hide();
            }

            window.location.href = "/";
        } else {
            passwordError.textContent = 'Ошибка авторизации';
            passwordError.style.display = 'block';
        }
    } catch (error) {
        alert('Ошибка соединения с сервером');

        const submitBtn = loginForm.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Войти';
        submitBtn.disabled = false;
    }
}
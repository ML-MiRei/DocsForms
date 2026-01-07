
const supportForm = document.getElementById('supportForm');
const emailError = document.getElementById('supEmailError');
const messageError = document.getElementById('supMessageError');


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

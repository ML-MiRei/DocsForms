const logoutCancelBtn = document.getElementById('logoutCancelBtn');
const logoutBtn = document.getElementById('logoutBtn');


logoutCancelBtn.addEventListener('click', () => {
    const myModal = bootstrap.Modal.getInstance(document.getElementById('logoutModal'));
    if (myModal) {
        myModal.hide();
    }
});


logoutBtn.addEventListener('click', async () => {
    const response = await fetch('/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const result = await response.json();

    if (response.ok && result.success) {

        alert(result.message || 'Выход выполнен успешно!');

        const myModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        if (myModal) {
            myModal.hide();
        }

        window.location.href = "/";
    }
});

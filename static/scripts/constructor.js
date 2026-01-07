const createDoc = document.getElementById('createDoc');
createDoc.addEventListener('click', (ev) => {
    const form = document.getElementById('form');

    if (form.reportValidity()) {
        ev.preventDefault();

        // const formDataToJson = (formData) => JSON.stringify(Object.fromEntries(formData));
        const formElement = document.querySelector('form');
        const jsonData = formDataToJson(new FormData(formElement));

        generate(jsonData);

    }
});


const formDataToJson = (formData) => {
    const result = {};

    formData.forEach((value, key) => {

        let num = key.match(/\d+/);

        if (!num) {
            result[key] = value;
            return;
        }

        let index = parseInt(num[0], 10);
        let baseKey = key.replace(/\d+/g, '');
        let groupName = document.getElementById(key).parentNode.parentNode.parentNode.id.replace(/\d+/g, '');

        if (!result[groupName]) {
            result[groupName] = [];
        }

        if (!result[groupName][index]) {
            result[groupName][index] = {};
        }

        result[groupName][index][baseKey] = value;
    });

    Object.keys(result).forEach(key => {
        if (Array.isArray(result[key])) {
            result[key] = result[key].filter(item => item !== null && item !== undefined);
        }
    });

    return JSON.stringify(result);
};


async function generate(data) {
    try {
        const submitBtn = loginForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Отправка...';
        submitBtn.disabled = true;

        const response = await fetch('/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: data
            })
        });

        const result = await response.json();

        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;

        if (response.ok && result.success) {



            window.location.href = "/download";
        }
    } catch (error) {
        alert('Ошибка соединения с сервером');

        const submitBtn = loginForm.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Войти';
        submitBtn.disabled = false;
    }
}

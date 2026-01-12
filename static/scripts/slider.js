// Слайдер резюме
let items = document.querySelectorAll('.slider .item');
let active = 3;

function loadShow() {
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    items[active].setAttribute('name', 'active');

    let stt = 0;
    for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${270 * stt - stt * stt * 15}px) scale(${1 - 0.2 * stt}) rotateY(-1deg)`;
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-270 * stt + stt * stt * 15}px) scale(${1 - 0.2 * stt}) rotateY(1deg)`;
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

loadShow();

document.getElementById('next').onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
    items[active].removeAttribute('name');
    loadShow();
}

document.getElementById('prev').onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    items[active].removeAttribute('name');
    loadShow();
}

const selectButton = document.getElementById('selectButton');
selectButton.addEventListener('click', () => {
    const el = document.getElementsByName('active')[0];
    if (el) {
        window.location.href = '/constructor/resume/' + el.getAttribute('value');
    }
});

const vacationBtn = document.getElementById('vacationBtn');
vacationBtn.addEventListener('click', () => {
    window.location.href = '/constructor/statement/1'; 
});

const bysellBtn = document.getElementById('bysellBtn');
bysellBtn.addEventListener('click', () => {
    window.location.href = '/constructor/by-sell/1'; 
});

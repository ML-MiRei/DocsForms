let items = document.querySelectorAll('.slider .item');
let active = 3;
function loadShow() {
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    items[active].setAttribute ('name', 'active');

    let stt = 0;
    for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${270 * stt - stt * stt * 15}px) scale(${1 - 0.2 * stt}) rotateY(-1deg)`;
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (var i = (active - 1); i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-270 * stt + stt * stt * 15}px) scale(${1 - 0.2 * stt}) rotateY(1deg)`;
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
let next = document.getElementById('next');
let prev = document.getElementById('prev');
next.onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
    items[active].removeAttribute('name');
    loadShow();
}
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    items[active].removeAttribute('name');
    loadShow();
}

const selectButton = document.getElementById('selectButton');

selectButton.addEventListener('click', () => {
    const el = document.getElementsByName('active')[0];
    window.location.href = '/constructor/resume/' + el.getAttribute('value');
});
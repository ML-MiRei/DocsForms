var openMenuButton = document.querySelector('.menu__btn');
var menu = document.querySelector('.menu__list');

openMenuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});
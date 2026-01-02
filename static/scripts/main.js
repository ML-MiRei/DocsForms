var openMenuButton = document.querySelector('.menu__btn');
var menu = document.querySelector('.menu__list');

openMenuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});

var swiper = new Swiper(".resume__templates", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".swipe-next",
        prevEl: ".swipe-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});
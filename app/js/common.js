$(document).ready(function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
});

$('[name="phone"]').mask('+7(999) 999-99-99');

$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.mobile-menu__close').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.wrapper-image').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
});
const result = new Swiper('.result', {
    loop: true,
    slidesPerView: 7,
    spaceBetween: 50,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 'auto',
            spaceBetween: 30,
            centeredSlides: true,
        },
        692: {
            slidesPerView: 7,
        },
    },
});

const reviews = new Swiper('.reviews', {
    loop: true,
    slidesPerView: 7,
    spaceBetween: 50,
    navigation: {
        nextEl: '.next-result',
        prevEl: '.prev-result',
    },
    breakpoints: {
        0: {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 30,
        },
        692: {
            slidesPerView: 7,
            spaceBetween: 50,
        },
    },
});


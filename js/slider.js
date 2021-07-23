const slider = document.querySelector('.slider-main');
const sliderNav = document.querySelector('.slider-nav');

let mySwiperNav = new Swiper(sliderNav, {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    freeMode: true,
    direction: 'vertical',
});

let mySwiper = new Swiper(slider, {
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: mySwiperNav,
    }
});
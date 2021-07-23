$('document').ready(function () {
  // Выделение пункта меню текущей страницы
  $('.menu-item a').each(function () {
    if ('http://127.0.0.1:5500/' + $(this).attr('href') == window.location.href) {
      $(this).addClass('active');
    }
  });

  // Smooth scroll
  (function () {
    const scrollLinks = document.querySelectorAll('a.scroll-link');
    for (const scrollLink of scrollLinks) {
      scrollLink.addEventListener('click', (event) => {
        event.preventDefault();
        const id = scrollLink.getAttribute('href');
        document.querySelector(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      });
    };
  })
  ()

  // Слайдер
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

});
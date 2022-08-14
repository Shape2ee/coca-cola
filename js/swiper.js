"use strict";

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.news__next',
    prevEl: '.news__prev',
  },
});
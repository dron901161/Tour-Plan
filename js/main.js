var mySwiper = new Swiper('.hotel-swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-button--next',
    prevEl: '.hotel-button--prev',
  },
  keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
});
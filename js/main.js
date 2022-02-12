var hotelSwiper = new Swiper('.hotel-swiper', {
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

var mreviewsSwiper = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-button--next',
    prevEl: '.reviews-button--prev',
  },
  keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
});
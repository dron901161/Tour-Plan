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

var reviewsSwiper = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
});
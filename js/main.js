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

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () { 
  console.log("Клик по кнопке меню");
  document
  .querySelector(".navbar-bottom")
  .classList.toggle("navbar-bottom_visible");
});
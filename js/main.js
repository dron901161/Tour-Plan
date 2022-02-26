$(document).ready(function () { 
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

  var menuButton = $(".menu-button");
  menuButton.on("click", function () { 
  $(".navbar-bottom").toggleClass("navbar-bottom_visible");
  });
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  };

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  };

  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      $(".modal__overlay").removeClass("modal__overlay--visible");
      $(".modal__dialog").removeClass("modal__dialog--visible");
    }
  });

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        nameModal: {
          required: true,
          minlength: 2,
        },
        email: {
          required: true,
          email: true,
        },
        emailModal: {
          required: true,
          email: true,
        },
        phone: {
          required: true,
          minlength: 18,
        },
        phoneModal: {
          required: true,
          minlength: 18,
        },
      },
      messages: {
        name: {
          required: "Please write your name",
          minlength: "At least two letters",
        },
        nameModal: {
          required: "Please write your name",
          minlength: "At least two letters",
        },
        phone: {
          required: "We also need your phone number",
          minlength: "At least ten numbers",
        },
        phoneModal: {
          required: "We also need your phone number",
          minlength: "At least ten numbers",
        },
        email: {
          required: "We need your email address to contact",
        },
        emailModal: {
          required: "We need your email address to contact",
        },
      },
    });
  });

  $(".phone").mask("+7 (000) 000-00-00");
  
});
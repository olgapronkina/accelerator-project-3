function init(Swiper, Navigation) {
  new Swiper('.slider-programs', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 15,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
        allowTouchMove: false,
      },
    },
    navigation: {
      nextEl: '.programs__slider-button--next',
      prevEl: '.programs__slider-button--prev',
      disabledClass: 'programs__slider-button--disabled',
    },
    scrollbar: {
      el: '.slider-programs__scrollbar',
      draggable: true,
    },
  });
}

export { init as ProgramsSliderInit };

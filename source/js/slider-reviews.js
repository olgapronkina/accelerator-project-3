function init(Swiper, Navigation) {
  new Swiper('.reviews__slider', {
    modules: [Navigation],
    keyboard: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.reviews__slider-button--next',
      prevEl: '.reviews__slider-button--prev',
      disabledClass: 'reviews__slider-button--disabled',
    },
    scrollbar: {
      el: '.reviews-slider__scrollbar',
      draggable: true,
    },
  });
}

export { init as ReviewsSliderInit };

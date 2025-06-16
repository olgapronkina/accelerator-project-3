function paginationBulletsPosition() {
  const activeSlide = document.querySelector('.swiper-slide-active');
  const sliderPagination = document.querySelector('.swiper-pagination');
  const sliderContent = activeSlide.querySelector('.slider__content');
  sliderPagination.style.bottom = `${sliderContent.offsetHeight}px`;
}

function init(Swiper, Pagination) {
  new Swiper('.slider', {
    modules: [Pagination],
    loop: true,
    breakpoints: {
      1440: {
        allowTouchMove: false,
      },
    },

    pagination: {
      el: '.slider__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className} slider__pagination-button swiper-pagination-bullet swiper-pagination-clickable swiper-pagination-bullet--${
          index + 1
        }"
        aria-label="перейти к слайду ${index + 1}"
        role="button">
        </span>`;
      },
    },
    on: {
      init: paginationBulletsPosition,
      slideChange: paginationBulletsPosition,
      slideChangeTransitionEnd: paginationBulletsPosition,
      slidesUpdated: paginationBulletsPosition,
    },
  });
}

export { init as SliderInit };

// https://swiperjs.com/get-started#installation
import Swiper from 'swiper/bundle';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

import { BurgerInit } from './burger.js';
import { SliderInit } from './slider.js';
import { ProgramsSliderInit } from './slider-programs.js';
import { FaqInit } from './faq.js';
import { ReviewsSliderInit } from './slider-reviews.js';
import { initFormValidation } from './form.js';
import { initPopup } from './popup.js';

BurgerInit();
SliderInit(Swiper, Pagination);
ProgramsSliderInit(Swiper, Navigation);
FaqInit();
ReviewsSliderInit(Swiper, Navigation);

document.addEventListener('DOMContentLoaded', () => {
  initPopup();
});

document.addEventListener('DOMContentLoaded', () => {
  initFormValidation();
});

// import { createNewsSlider } from './news-slider.js';
// import { initNewsTabScroll } from './news-tabs.js';

// document.addEventListener('DOMContentLoaded', () => {
//   createNewsSlider('news');
//   initNewsTabScroll();
// });

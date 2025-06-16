// export function createNewsSlider(containerId) {
//   const container = document.getElementById(containerId);
//   if (!container) return;

//   const newsContainer = container.querySelector('.news__news-list');
//   const paginationList = container.querySelector('.news__pagination-list');
//   const prevButton = container.querySelector('.news__pagination-button--prev');
//   const nextButton = container.querySelector('.news__pagination-button--next');

//   if (!newsContainer || !paginationList) return;

//   const newsItems = Array.from(
//     newsContainer.querySelectorAll('.news__news-item')
//   );
//   const totalSlides = newsItems.length;

//   // Создаем кнопки пагинации
//   function createPaginationButtons() {
//     paginationList.innerHTML = '';

//     const maxVisibleButtons = Math.min(totalSlides, 4);
//     for (let i = 0; i < maxVisibleButtons; i++) {
//       const button = document.createElement('li');
//       button.className = 'news__pagination-item';

//       const link = document.createElement('a');
//       link.className = 'news__pagination-link';
//       link.href = '#';
//       link.textContent = i + 1;

//       link.addEventListener('click', (event) => {
//         event.preventDefault();
//         goToSlide(i);
//       });

//       button.appendChild(link);
//       paginationList.appendChild(button);
//     }
//   }

//   // Переходим к конкретному слайду
//   function goToSlide(index) {
//     if (index < 0 || index >= totalSlides) return;

//     newsItems.forEach((item, i) => {
//       item.style.display = i === index ? 'block' : 'none';
//     });

//     updateNavButtonsState();
//   }

//   // Обновляем состояние кнопок "назад/вперед"
//   function updateNavButtonsState() {
//     const currentIndex = newsItems.findIndex(
//       (item) => item.style.display === 'block'
//     );

//     prevButton.disabled = currentIndex === 0;
//     nextButton.disabled = currentIndex === totalSlides - 1;
//   }

//   // Инициализация
//   function init() {
//     // Обработчики событий для кнопок навигации
//     if (prevButton) {
//       prevButton.addEventListener('click', () => {
//         const currentIndex = newsItems.findIndex(
//           (item) => item.style.display === 'block'
//         );
//         goToSlide(currentIndex - 1);
//       });
//     }

//     if (nextButton) {
//       nextButton.addEventListener('click', () => {
//         const currentIndex = newsItems.findIndex(
//           (item) => item.style.display === 'block'
//         );
//         goToSlide(currentIndex + 1);
//       });
//     }

//     // Создаем начальные кнопки пагинации
//     createPaginationButtons();
//     goToSlide(0); // Показываем первый слайд
//   }

//   init();
// }

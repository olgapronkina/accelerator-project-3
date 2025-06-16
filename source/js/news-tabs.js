// export function initNewsTabScroll() {
//   const tabWrapper = document.querySelector('.news__tab-wrapper');
//   const newsItems = document.querySelectorAll('.news__news-item');

//   if (!tabWrapper) return;

//   // Скрываем все новости при инициализации
//   newsItems.forEach((item) => (item.style.display = 'none'));
//   newsItems[0].style.display = 'block'; // Показываем первую вкладку

//   // Обработчик изменения вкладок
//   document.querySelectorAll('.news__tab-input').forEach((tab) => {
//     tab.addEventListener('change', (event) => {
//       const selectedTab = event.target.id;

//       // Скрываем все новости
//       newsItems.forEach((item) => {
//         item.style.display = 'none';
//         // Показываем только те, которые соответствуют выбранной вкладке
//         if (item.classList.contains(selectedTab)) {
//           item.style.display = 'block';
//         }
//       });
//     });
//   });
// }

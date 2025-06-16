const faqContainer = document.querySelector('.faq__questions-container');

function init() {
  faqContainer.addEventListener('click', (event) => {
    if (!event.target.classList.contains('faq__questions-container')) {
      const faqClicked = event.target.closest('.faq__question');
      const faqButton = faqClicked.querySelector('.faq__question-button');

      // if (!faqClicked.classList.contains('faq__question--opened')) {
      //   faqClicked.querySelector('p').style.height = `${faqClicked.querySelector('p').scrollHeight}px`;
      // } else {
      //   faqClicked.querySelector('p').style.height = 0;
      // }

      faqClicked.classList.toggle('faq__question--opened');
      faqButton.classList.toggle('faq__question-button--active');
    }
  });
}

export { init as FaqInit };

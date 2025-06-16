export function openPopup(popup) {
  popup.classList.add('popup--active');
  document.body.classList.add('body--popup');
  const overlay = document.querySelector('.popup__overlay');
  overlay.classList.add('popup__overlay--active');
}

export function closePopup(popup) {
  popup.classList.remove('popup--active');
  document.body.classList.remove('body--popup');
  const overlay = document.querySelector('.popup__overlay');
  overlay.classList.remove('popup__overlay--active');
}

function maskPhone() {
  const phoneInput = document.querySelector('.popup__input--phone');

  phoneInput.addEventListener('input', () => {
    let value = phoneInput.value.replace(/\D/g, '');
    if (value.length === 0) {
      value = '+7';
    } else if (value.length > 1) {
      value = `+7 (${value.substring(1, 4)}) ${value.substring(
        4,
        7
      )}-${value.substring(7, 9)}-${value.substring(9, 11)}`;
    }
    phoneInput.value = value;
  });
}

export function initPopup() {
  const popup = document.querySelector('.popup');
  const openPopupButton = document.querySelector('.about__button-more');
  const closePopupButton = document.querySelector('.popup__button-close');
  const popupOverlay = document.querySelector('.popup__overlay');
  const form = document.querySelector('.popup__form');
  const checkbox = form.querySelector('.popup__checkbox');
  const inputs = form.querySelectorAll('.popup__input');

  openPopupButton.addEventListener('click', () => openPopup(popup));
  closePopupButton.addEventListener('click', () => closePopup(popup));

  // Закрытие попапа при нажатии на оверлей
  popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
      closePopup(popup);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closePopup(popup);
    }
  });

  maskPhone();

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      checkbox.setCustomValidity('');
    } else {
      checkbox.setCustomValidity('Вы должны согласиться на обработку данных.');
    }
  });

  // Валидация инпутов при вводе
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      validateInput(input); // Проверка валидности при вводе
      input.reportValidity(); // Показываем стандартную подсказку браузера, если есть ошибка
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isValid = true;

    inputs.forEach((input) => {
      const isInputValid = validateInput(input);
      if (!isInputValid) {
        isValid = false;
        input.reportValidity(); // Показываем стандартную подсказку браузера
      }
    });

    if (!checkbox.checked) {
      isValid = false;
      checkbox.setCustomValidity('Вы должны согласиться на обработку данных.');
      checkbox.reportValidity(); // Показываем стандартную подсказку браузера
    }

    if (isValid) {
      const formData = new FormData(form);
      fetch(form.action, {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            closePopup(popup);
            form.reset(); // Сброс формы после успешной отправки
          } else {
            showError(form, 'Произошла ошибка при отправке данных.');
          }
        })
        .catch(() => {
          showError(form, 'Произошла ошибка при отправке данных.');
        });
    }
  });

  function validateInput(input) {
    const value = input.value.trim();
    if (value === '') {
      input.classList.add('invalid');
      input.setCustomValidity('Это поле обязательно для заполнения.'); // Устанавливаем сообщение об ошибке
      return false;
    } else {
      input.classList.remove('invalid');
      input.setCustomValidity(''); // Убираем сообщение об ошибке
      return true;
    }
  }

  function showError(element, message) {
    const error = document.createElement('div');
    error.classList.add('error-message');
    error.textContent = message;
    element.parentElement.appendChild(error);
  }
}

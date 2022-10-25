const orderButton = document.querySelector('.main-nav__toggle');
const popupForm = document.querySelector('.popup-form');
const pageBody = document.querySelector('body');
const buttonClosepopup = document.querySelector('.popup-form__button-close');
const nameInput = document.querySelector('#name-call');

if (popupForm) {
  orderButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    popupForm.classList.toggle('popup-form--open');
    pageBody.classList.toggle('body--opened-modal');
    nameInput.focus();
  });
  buttonClosepopup.addEventListener('click', () => {
    popupForm.classList.toggle('popup-form--open');
    pageBody.classList.toggle('body--opened-modal');
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      if (popupForm.classList.contains('popup-form--open')) {
        popupForm.classList.remove('popup-form--open');
      }
      if (pageBody.classList.contains('body--opened-modal')) {
        pageBody.classList.remove('body--opened-modal');
      }
    }
  });
  popupForm.addEventListener('click', (evt) => {
    const target = evt.target;
    if (!target.closest('.popup-form__wrapper')) {
      popupForm.classList.remove('popup-form--open');
      pageBody.classList.remove('body--opened-modal');
    }
  });
}

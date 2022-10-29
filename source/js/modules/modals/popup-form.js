const orderButton = document.querySelector('.main-nav__toggle');
const popupForm = document.querySelector('.popup-form');
const pageBody = document.querySelector('body');
const buttonClosePopup = document.querySelector('.popup-form__button-close');
const nameInput = document.querySelector('#name-call');
const approvalInput = document.querySelector('#approval-call');
const inputFirst = document.querySelector('#modal-input-first');
const inputLast = document.querySelector('#modal-input-last');

if (popupForm) {
  orderButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    pageBody.style.position = 'fixed';
    popupForm.classList.toggle('popup-form--open');
    pageBody.classList.toggle('body--opened-modal');
    nameInput.focus();
  });
  buttonClosePopup.addEventListener('click', () => {
    popupForm.classList.toggle('popup-form--open');
    pageBody.classList.toggle('body--opened-modal');
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      if (popupForm.classList.contains('popup-form--open')) {
        pageBody.style.position = '';
        popupForm.classList.remove('popup-form--open');
      }
      if (pageBody.classList.contains('body--opened-modal')) {
        pageBody.style.position = '';
        pageBody.classList.remove('body--opened-modal');
      }
    }
  });
  popupForm.addEventListener('click', (evt) => {
    const target = evt.target;
    pageBody.style.position = '';
    if (!target.closest('.popup-form__wrapper')) {
      pageBody.style.position = '';
      popupForm.classList.remove('popup-form--open');
      pageBody.classList.remove('body--opened-modal');
    }
  });
  inputLast.addEventListener('focus', () => {
    buttonClosePopup.focus();
  });
  inputFirst.addEventListener('focus', () => {
    approvalInput.focus();
  });
}

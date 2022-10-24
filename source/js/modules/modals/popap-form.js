const orderButton = document.querySelector('.main-nav__toggle');
const popapForm = document.querySelector('.popap-form');
const pageBody = document.querySelector('body');
const buttonClosePopap = document.querySelector('.popap-form__button-close');
const nameInput = document.querySelector('#name-call');

if (popapForm) {
  orderButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    popapForm.classList.toggle('popap-form--open');
    pageBody.classList.toggle('body--opened-modal');
    nameInput.focus();
  });
  buttonClosePopap.addEventListener('click', () => {
    popapForm.classList.toggle('popap-form--open');
    pageBody.classList.toggle('body--opened-modal');
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      if (popapForm.classList.contains('popap-form--open')) {
        popapForm.classList.remove('popap-form--open');
      }
      if (pageBody.classList.contains('body--opened-modal')) {
        pageBody.classList.remove('body--opened-modal');
      }
    }
  });
  popapForm.addEventListener('click', (evt) => {
    const target = evt.target;
    if (!target.closest('.popap-form__wrapper')) {
      popapForm.classList.remove('popap-form--open');
      pageBody.classList.remove('body--opened-modal');
    }
  });
}

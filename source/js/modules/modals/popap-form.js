const orderButton = document.querySelector('.main-nav__toggle');
const modalCall = document.querySelector('.popap-form');
const pageBody = document.getElementsByTagName('body');
const buttonCloseModal = document.querySelector('.popap-form__button-close');
const nameInput = document.querySelector('#name-call');
const approvalInput = document.querySelector('#personal-call');
const inputFirst = document.querySelector('#popap-form');
const inputLast = document.querySelector('#popap-form-last');

if (modalCall) {
  orderButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalCall.classList.toggle('popap-form--open');
    pageBody.classList.toggle('body--opened-modal');
    nameInput.focus();
  });
  buttonCloseModal.addEventListener('click', () => {
    modalCall.classList.toggle('popap-form--open');
    pageBody.classList.toggle('body--opened-modal');
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      if (modalCall.classList.contains('popap-form--open')) {
        modalCall.classList.remove('popap-form--open');
      }
      if (pageBody.classList.contains('body--opened-modal')) {
        pageBody.classList.remove('body--opened-modal');
      }
    }
  });
  modalCall.addEventListener('click', (evt) => {
    const target = evt.target;
    if (!target.closest('.popap-form__wrapper')) {
      modalCall.classList.remove('popap-form--open');
      pageBody.classList.remove('body--opened-modal');
    }
  });
  inputLast.addEventListener('focus', () => {
    buttonCloseModal.focus();
  });
  inputFirst.addEventListener('focus', () => {
    approvalInput.focus();
  });
}

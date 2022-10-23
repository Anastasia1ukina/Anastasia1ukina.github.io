let formFeedback = document.getElementById('form-section');
let btn = document.querySelector('.promo__button');

function handleButtonClick() {
  formFeedback.scrollIntoView({block: 'center', behavior: 'smooth'});
}

btn.addEventListener('click', handleButtonClick);

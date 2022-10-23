const aboutButton = document.querySelector('.about-company__button');

aboutButton.addEventListener('click', () => {
  document.querySelector('.about-company__description-mobile').classList.toggle('about-company__description-mobile--active');
  document.querySelector('.about-company__description-more').classList.toggle('about-company__description-more--active');

  if (aboutButton.innerText.toLowerCase() === 'подробнее') {
    aboutButton.innerText = 'Свернуть';
  } else {
    aboutButton.innerText = 'Подробнее';
  }
});

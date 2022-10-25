document.querySelector('.page-footer__nav').classList.remove('accordion--open');
document.querySelector('.page-footer__contacts-wrapper').classList.remove('accordion--open');

document.querySelectorAll('.accordion').forEach((accordion) => {
  accordion.addEventListener('click', () => {
    if (accordion.classList.contains('accordion--open')) {
      accordion.classList.remove('accordion--open');
    } else {
      document.querySelectorAll('.accordion').forEach((accordionItem) => accordionItem.classList.remove('accordion--open'));
      accordion.classList.add('accordion--open');
    }
  });
});

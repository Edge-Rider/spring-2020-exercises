'use strict';

const starElms = document.querySelectorAll('.rating__star');

const turnOnStars = (count) => {
  for (let i = 0; i < starElms.length; i++) {
    if (i < count) {
      starElms[i].classList.add('rating__star--on');
    } else {
      starElms[i].classList.remove('rating__star--on');
    }
  }
};

starElms.forEach((star, index) => {
  star.addEventListener('click', () => {
    const valueELm = document.querySelector('.rating__value');
    valueELm.textContent = index + 1;
    turnOnStars(index + 1);
  });
});

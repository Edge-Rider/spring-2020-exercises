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

starElms[0].addEventListener('click', () => {
  const valueELm = document.querySelector('.rating__value');
  valueELm.textContent = 1;
  turnOnStars(1);
});

starElms[1].addEventListener('click', () => {
  const valueELm = document.querySelector('.rating__value');
  valueELm.textContent = 2;
  turnOnStars(2);
});

starElms[2].addEventListener('click', () => {
  const valueELm = document.querySelector('.rating__value');
  valueELm.textContent = 3;
  turnOnStars(3);
});

starElms[3].addEventListener('click', () => {
  const valueELm = document.querySelector('.rating__value');
  valueELm.textContent = 4;
  turnOnStars(4);
});

starElms[4].addEventListener('click', () => {
  const valueELm = document.querySelector('.rating__value');
  valueELm.textContent = 5;
  turnOnStars(5);
});
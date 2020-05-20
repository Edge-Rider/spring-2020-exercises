'use strict';

class ProgressBar {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  increase() {
    if (this.value < this.max) {
      this.value += 1;
    }
  }

  decrease() {
    if (this.value > 0) {
      this.value -= 1;
    }
  }
};

const update = (progressBar) => {
  const counterElm = document.querySelector('#counter');
  counterElm.textContent = progressBar.value;
  const maximumElm = document.querySelector('#maximum');
  maximumElm.textContent = progressBar.max;

  const step = 100 / progressBar.max;
  const knobElm = document.querySelector('#knob');
  knobElm.style.width = `${progressBar.value * step}%`;
};

const bar = new ProgressBar(15, 50);

const btnPlus = document.querySelector('#plus');
btnPlus.addEventListener('click', () => {
  bar.increase();
  update(bar);
});

const minusPlus = document.querySelector('#minus');
minusPlus.addEventListener('click', () => {
  bar.decrease();
  update(bar);
});

update(bar);
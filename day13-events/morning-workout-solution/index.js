'use strict';

let result = 0;

const func = () => {
  const t0 = performance.now();
  document.querySelector('.calc__result');
  const t1 = performance.now();
  console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
}

const getInput = () => Number(document.querySelector('.calc__input').value);

const onEquals = () => {
  const resultElm = document.querySelector('.calc__result');
  const inputElm = getInput();

  result += Number(inputElm.value);

  inputElm.value = '0';
  inputElm.focus();
  resultElm.textContent = result;
}

const onPlus = () => {
  const resultElm = document.querySelector('.calc__result');
  const inputElm = getInput();

  result += Number(inputElm.value);

  inputElm.value = '0';
  inputElm.focus();
  resultElm.textContent = result;
}
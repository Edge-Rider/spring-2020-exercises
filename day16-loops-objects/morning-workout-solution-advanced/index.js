'use strict';

const aside = document.querySelector('#aside');
let timerId = null;

aside.addEventListener('mouseenter', () => {
  clearTimeout(timerId);
  aside.classList.remove('aside--closed');
});

aside.addEventListener('mouseleave', () => {
  timerId = setTimeout(() => {
    aside.classList.add('aside--closed');
  }, 1000);
});
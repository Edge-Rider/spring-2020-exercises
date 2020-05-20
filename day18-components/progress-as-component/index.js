'use strict';

const app = document.querySelector('#app');

const bar1 = new ProgressBar(15, 50, 'red');
bar1.mount(app);

const bar2 = new ProgressBar(2, 20, 'green');
bar2.mount(app);

const bar3 = new ProgressBar(8, 10, 'blue');
bar3.mount(app);

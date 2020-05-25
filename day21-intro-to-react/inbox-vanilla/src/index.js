import Message from './Message/message.js';
import './style.scss';
import './index.html';

const appElm = document.querySelector('#app');
const msg = new Message('Donald Trump', 'Make America great again', '9:30');
msg.mount(appElm);
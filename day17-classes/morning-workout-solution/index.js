'use strict';

const likeClick = (e) => {
  e.target.classList.toggle('btn-like--liked');
};

const chat = document.querySelector('#chat');

conversation.forEach((msg) => {
  const name = msg.name.toLowerCase();
  const msgElm = document.createElement('div');
  msgElm.className = `message message--${msg.side}`;
  msgElm.innerHTML += `
    <img class="message__head" src="img/${name}.png"/>
    <div class="message__text">${msg.text}</div>
    <button class="btn-like">like</button>
  `;
  const btnLike = msgElm.querySelector('.btn-like');
  btnLike.addEventListener('click', likeClick);

  chat.appendChild(msgElm);
});

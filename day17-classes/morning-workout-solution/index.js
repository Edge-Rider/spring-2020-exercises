'use strict';

const chat = document.querySelector('#chat');

conversation.forEach((msg) => {
  const name = msg.name.toLowerCase();
  chat.innerHTML += `
    <div class="message message--${msg.side}">
      <img class="message__head" src="img/${name}.png"/>
      <div class="message__text">${msg.text}</div>
    </div>
  `;
});

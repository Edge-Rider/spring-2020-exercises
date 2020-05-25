import './style.scss';

export default class Message {
  constructor(sender, subject, time) {
    this.sender = sender;
    this.subject = subject;
    this.time = time;
  }

  render() {
    const messageElm = document.createElement('div');
    messageElm.className = 'message';
    messageElm.innerHTML = `
      <div class="message__sender">${this.sender}</div>
      <div class="message__subject">${this.subject}</div>
      <div class="message__time">${this.time}</div>
    `;

    return messageElm;
  }

  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
  }
};
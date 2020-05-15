const padlock = document.querySelector('#padlock');

const toggleHide = () => {
  const message = document.querySelector('#message');
  message.classList.toggle('hidden');
};

padlock.addEventListener('mouseenter', toggleHide);
padlock.addEventListener('mouseleave', toggleHide);

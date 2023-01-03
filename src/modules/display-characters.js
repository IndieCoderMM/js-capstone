import showPopup from './popup-detail.js';

const makeElement = (tag, className) => {
  const elem = document.createElement(tag);
  elem.classList.add(className);
  return elem;
};

const appendChildren = (elem, ...children) => {
  children.forEach((child) => elem.appendChild(child));
};

const makeCharacterCard = (character) => {
  const card = makeElement('section', 'character-card');
  const frame = makeElement('div', 'frame');
  const img = makeElement('img', 'card-img');
  img.src = character.image;
  const header = makeElement('div', 'card-header');
  const name = makeElement('h3', 'name');
  name.innerText = character.name;
  const likeBtn = makeElement('button', 'like-btn');
  likeBtn.innerText = 'Like';
  const commentBtn = makeElement('button', 'comment-btn');
  commentBtn.id = character.head + character.tail;
  commentBtn.innerText = 'Comment';
  commentBtn.onclick = showPopup;
  frame.appendChild(img);
  appendChildren(header, name, likeBtn);
  appendChildren(card, frame, header, commentBtn);
  return card;
};

const displayCharacters = (characters) => {
  const galleryContainer = document.querySelector('.gallery');
  galleryContainer.textContent = '';
  characters.forEach((character) => {
    const card = makeCharacterCard(character);
    galleryContainer.appendChild(card);
  });
};

export default displayCharacters;

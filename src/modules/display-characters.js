import likeCounter from './like-counter.js';

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
  likeBtn.innerText = 'Like (' + character.likes + ')';
  const commentBtn = makeElement('button', 'comment-btn');
  commentBtn.id = character.id;
  commentBtn.innerText = 'Comment';
  frame.appendChild(img);
  appendChildren(header, name, likeBtn);
  appendChildren(card, frame, header, commentBtn);
  return card;
};

const displayCharacters = (characters, likedItems) => {
  const galleryContainer = document.querySelector('.gallery');
  galleryContainer.textContent = '';
  characters.forEach((character) => {
    character.id = character.head + character.tail;
    character.likes = likeCounter(likedItems, character.id);
    const card = makeCharacterCard(character);
    galleryContainer.appendChild(card);
  });
};

export default displayCharacters;

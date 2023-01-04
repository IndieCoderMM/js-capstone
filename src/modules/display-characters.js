import showPopup from './popup-detail.js';
import likeCounter from './like-counter.js';
import addLike from './add-like.js';

const makeElement = (tag, ...classes) => {
  const elem = document.createElement(tag);
  classes.forEach((className) => {
    elem.classList.add(className);
  });
  return elem;
};

const appendChildren = (elem, ...children) => {
  children.forEach((child) => elem.appendChild(child));
};

const makeCharacterCard = (character) => {
  const card = makeElement('section', 'character-card');
  const frame = makeElement('div', 'frame');
  const img = makeElement('img', 'card-img');
  const header = makeElement('div', 'card-header');
  const name = makeElement('h3', 'card-name');
  const likeBtn = makeElement('button', 'like-btn');
  const likeIcon = makeElement('i', 'fa-solid', 'fa-heart');
  const likeCounter = makeElement('span', 'like-counter');
  const commentBtn = makeElement('button', 'comment-btn');
  const commentIcon = makeElement('i', 'fa-regular', 'fa-comment');
  img.src = character.image;
  name.innerText = character.name;
  commentBtn.id = character.id;
  commentBtn.innerText = 'Comment';
  commentBtn.onclick = showPopup;
  likeCounter.innerText = `Like ${character.likes}`;
  likeBtn.id = character.id;
  likeBtn.onclick = addLike;
  frame.appendChild(img);
  commentBtn.appendChild(commentIcon);
  appendChildren(likeBtn, likeIcon, likeCounter);
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

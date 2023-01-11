import './index.css';
import getCharacters from './modules/get-characters.js';
import displayCharacters from './modules/display-characters.js';
import updateLikes from './modules/update-likes.js';
import getLikes from './modules/get-likes.js';
import getItemCount from './modules/item-counter.js';
import filterCards from './modules/search-items.js';

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const itemCount = document.querySelector('#item-count');

const refreshGallery = async () => {
  // Get characters from Api
  const characters = await getCharacters();
  // Get total likes
  const likedItems = await getLikes();
  // Update on the page
  characters.sort(() => Math.random() - 0.5);
  displayCharacters(characters);
  characters.forEach((character) => updateLikes(likedItems, character.id));
  // Update total items
  itemCount.innerText = getItemCount();
};

refreshGallery();

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  filterCards(searchInput.value.trim());
  itemCount.innerText = getItemCount();
});

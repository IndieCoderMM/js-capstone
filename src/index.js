import './index.css';
import getCharacters from './modules/get-characters.js';
import displayCharacters from './modules/display-characters.js';
import updateLikes from './modules/update-likes.js';
import getLikes from './modules/get-likes.js';

const refreshGallery = async () => {
  // Get characters from Api
  const characters = await getCharacters();
  // Get total likes
  const likedItems = await getLikes();
  // Update on the page
  displayCharacters(characters);
  characters.forEach((character) => updateLikes(likedItems, character.id));
};

refreshGallery();

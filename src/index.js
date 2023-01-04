import './index.css';
import getCharacters from './modules/get-characters.js';
import displayCharacters from './modules/display-characters.js';
import getLikes from './modules/get-likes.js';

// Getting characters from Api and loading to page
const refreshGallery = async () => {
  const characters = await getCharacters();
  const likedItems = await getLikes();
  displayCharacters(characters, likedItems);
};

refreshGallery();

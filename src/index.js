import './index.css';
import getCharacters from './modules/get-characters.js';
import displayCharacters from './modules/display-characters.js';
import getLikes from './modules/get-likes.js';

const API_URL = 'https://www.amiiboapi.com/api/amiibo';
const APP_ID = 'dRuHy6BFXNSTiZHMOETw';

// Getting characters from Api and loading to page
const refreshGallery = async () => {
  const characters = await getCharacters(API_URL);
  const likedItems = await getLikes(APP_ID);
  displayCharacters(characters, likedItems);
};

refreshGallery();

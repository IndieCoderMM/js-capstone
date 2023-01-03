import './index.css';
import getCharacters from './modules/get-characters.js';
import displayCharacters from './modules/display-characters.js';
// import { commentBtnClick, closeBtnClick } from './modules/popup-detail.js';

// Getting characters from Api and loading to page
const refreshGallery = async () => {
  const characters = await getCharacters();
  displayCharacters(characters);
};

// commentBtnClick();
// closeBtnClick();
refreshGallery();


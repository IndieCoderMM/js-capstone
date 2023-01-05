import { INV_API, APP_ID } from './constants.js';
import displayErrorPage from './display-error.js';

const getLikes = async () => {
  const url = `${INV_API + APP_ID}/likes`;
  const response = await fetch(url);
  if (!response.ok) {
    displayErrorPage();
  }
  const data = await response.json();
  return data;
};

export default getLikes;

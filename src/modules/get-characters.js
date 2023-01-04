import { API_URL } from './constants.js';
import displayErrorPage from './display-error.js';

const getCharacters = async () => {
  const response = await fetch(`${API_URL}?type=figure`);
  if (!response.ok) {
    displayErrorPage();
    return;
  }
  const data = await response.json();
  return data.amiibo;
};

export default getCharacters;

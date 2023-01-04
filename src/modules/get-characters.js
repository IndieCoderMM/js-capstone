import { API_URL } from './constants.js';

const getCharacters = async () => {
  const response = await fetch(`${API_URL}?type=figure`);
  const data = await response.json();
  return data.amiibo;
};

export default getCharacters;

import { INV_API, APP_ID } from './constants.js';

const getLikes = async () => {
  const url = `${INV_API + APP_ID}/likes`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};

export default getLikes;

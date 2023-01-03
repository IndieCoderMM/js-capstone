const API_URL = 'https://www.amiiboapi.com/api/amiibo';

const getCharacters = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log(data);
  return data.amiibo;
};

export default getCharacters;

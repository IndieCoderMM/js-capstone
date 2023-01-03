const getCharacters = async (apiUrl) => {
  const response = await fetch(apiUrl + '?type=figure');
  const data = await response.json();
  return data.amiibo;
};

export default getCharacters;

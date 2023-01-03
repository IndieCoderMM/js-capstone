const INV_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const getLikes = async (appId) => {
  const url = `${INV_API + appId}/likes`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default getLikes;

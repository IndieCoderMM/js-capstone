const INV_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const getComments = async (appId, itemId) => {
  const url = `${INV_API + appId}/comments?item_id=${itemId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default getComments;

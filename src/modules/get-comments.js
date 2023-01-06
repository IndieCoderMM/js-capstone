import { INV_API } from './constants.js';

const getComments = async (appId, itemId) => {
  const url = `${INV_API + appId}/comments?item_id=${itemId}`;
  const response = await fetch(url);
  if (!response.ok) return false;

  const data = await response.json();
  return data;
};

export default getComments;

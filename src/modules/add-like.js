import { INV_API, APP_ID } from './constants.js';

const addLike = async (event) => {
  const id = event.target.closest('.like-btn').id;
  await fetch(`${INV_API + APP_ID}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });
};

export default addLike;

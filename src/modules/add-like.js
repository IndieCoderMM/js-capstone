import { INV_API, APP_ID } from './constants.js';
import updateLikes from './update-likes.js';
import getLikes from './get-likes.js';

const addLike = async (event) => {
  // Get item_id from clicked btn (id = #like-01349493090)
  const charId = event.target.closest('.like-btn').id.split('-')[1];
  // Create new like
  await fetch(`${INV_API + APP_ID}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: charId }),
  });
  // Update on the page
  const likedItems = await getLikes();
  updateLikes(likedItems, charId);
};

export default addLike;

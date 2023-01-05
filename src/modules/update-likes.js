import likeCounter from './like-counter.js';

const updateLikes = async (likedItems, charId) => {
  // Count likes for given id and update on the page
  const totalLikes = likeCounter(likedItems, charId);
  const likesCount = document.querySelector(`#like-${charId} .like-counter`);
  likesCount.innerText = `Like ${totalLikes}`;
};

export default updateLikes;

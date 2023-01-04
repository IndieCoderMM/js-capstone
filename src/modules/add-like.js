const INV_API =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const APP_ID = 'dRuHy6BFXNSTiZHMOETw';

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

const INV_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const addComment = async (appId, itemId, uname, ucomment) => {
  const url = `${INV_API + appId}/comments?item_id=${itemId}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: itemId,
      username: uname,
      comment: ucomment,
    }),
  });
  const data = await response.json();
  return data || null;
};

export default addComment;
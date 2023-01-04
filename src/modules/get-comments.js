const INV_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const getComments = async (appId, itemId) => {
  const url = `${INV_API + appId}/comments`;
  console.log(itemId);
  const response = await fetch(url,
    {
      Method: 'POST',
      Headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
      Body: JSON.stringify({
        item_id: itemId,
        username: 'Thant',
        comment: 'I like mario',
      }),
    });
  const data = await response.json();
  console.log(data);
};

export default getComments;

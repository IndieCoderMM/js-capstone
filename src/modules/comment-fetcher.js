const comments = (allComments, id) => {
  const comment = allComments.find((item) => item.item_id === id);
  return comment;
};

export default comments;

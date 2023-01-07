const countComment = (data) => {
  if (!data) return 0;
  let i = 0;
  data.forEach((element) => {
    if (element.username !== '' && element.comment !== '') {
      i += 1;
    }
  });
  return i;
};

export default countComment;

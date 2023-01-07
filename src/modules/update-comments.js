import getComments from './get-comments.js';
import countComment from './comment-counter.js';
import { APP_ID } from './constants.js';

const newComment = document.querySelector('.new-comment');
const numberOfComments = document.getElementById('number-of-comments');

const updateComments = async (itemId) => {
  newComment.innerHTML = '';
  const comments = await getComments(APP_ID, itemId);
  if (comments) {
    comments.forEach((element) => {
      if (element.username !== '' && element.comment !== '') {
        newComment.innerHTML += `<li>${element.creation_date} <b>${element.username} </b>: ${element.comment}</li>`;
      }
    });
  }
  numberOfComments.innerHTML = countComment(comments);
};

export default updateComments;

import addComment from './add-comment.js';
import updateComments from './update-comments.js';
import { APP_ID, API_URL } from './constants.js';

const popup = document.querySelector('.popup');
const gallery = document.querySelector('.gallery');
const closeBtn = document.querySelector('.close-btn');
const popImage = document.querySelector('.popup-img');
const popTitle = document.querySelector('.pop-name');
const series = document.querySelector('.series');
const gameSeries = document.querySelector('.game-series');
const submit = document.querySelector('.submit');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');
const nameInput = document.getElementById('name');
const commentInput = document.getElementById('comment');

const getItem = async (itemId) => {
  const result = await fetch(`${API_URL}/?id=${itemId}`);
  const data = await result.json();
  popImage.src = data.amiibo.image;
  popTitle.innerHTML = data.amiibo.name;
  series.innerHTML = data.amiibo.amiiboSeries;
  gameSeries.innerHTML = data.amiibo.gameSeries;
  submit.id = `submit-${itemId}`;

  await updateComments(itemId);
};

const showPopup = (e) => {
  popup.classList.toggle('active');
  gallery.classList.toggle('hide');
  const itemId = e.target.id;
  getItem(itemId);
};

const closePopup = () => {
  popup.classList.toggle('active');
  gallery.classList.toggle('hide');
};

closeBtn.addEventListener('click', closePopup);
submit.addEventListener('click', async (e) => {
  const itemId = e.target.id.split('-')[1];
  const uname = nameInput.value;
  const ucomment = commentInput.value;
  if (uname !== '' && ucomment !== '') {
    const success = await addComment(APP_ID, itemId, uname, ucomment);
    if (success) {
      await updateComments(itemId);
      successMessage.innerHTML = 'Comment succesfully added.';
      nameInput.value = '';
      commentInput.value = '';
    }
  } else {
    errorMessage.innerHTML = 'Please fill in all the fields!';
  }
});

export default showPopup;

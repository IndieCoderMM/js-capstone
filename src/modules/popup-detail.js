const commentBtn = document.querySelector('.comment-btn');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close');

const showPopup = (e) => {
  popup.classList.remove('active');
};

export default showPopup;
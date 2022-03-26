import {isEscapeKey} from './util.js';
import {getComments, clearComments} from './comment.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImageElement = bigPictureElement.querySelector('.big-picture__img img');
const bigPictureLikesElement = bigPictureElement.querySelector('.likes-count');
const bigPictureCommentsElement = bigPictureElement.querySelector('.comments-count');
const bigPictureDescriptionElement = bigPictureElement.querySelector('.social__caption');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCloseElement = bigPicture.querySelector('.big-picture__cancel');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

const renderPhoto = ({url, likes, comments, description}) => {
  clearComments();

  bigPictureImageElement.src = url;
  bigPictureLikesElement.textContent = likes;
  bigPictureCommentsElement.textContent = comments.length;
  bigPictureDescriptionElement.textContent = description;

  getComments(comments);
};

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const onBigPictureCloseElementClick = () => {
  closeBigPicture();
};

function openBigPicture(miniature) {
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');

  renderPhoto(miniature);

  document.addEventListener('keydown', onPopupEscKeydown);
  bigPictureCloseElement.addEventListener('click', onBigPictureCloseElementClick);
}

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onPopupEscKeydown);
  bigPictureCloseElement.removeEventListener('click', onBigPictureCloseElementClick);
}

export {openBigPicture};

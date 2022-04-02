import {isEscapeKey} from './util.js';
import {getComments, clearComments} from './comment.js';
import {COMMENTS_PART} from './constants.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImageElement = bigPictureElement.querySelector('.big-picture__img img');
const bigPictureLikesElement = bigPictureElement.querySelector('.likes-count');
const bigPictureCommentsElement = bigPictureElement.querySelector('.comments-count');
const bigPictureDescriptionElement = bigPictureElement.querySelector('.social__caption');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCloseElement = bigPicture.querySelector('.big-picture__cancel');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

let basisComments = null;
let commentsCounter = 0;

const createCommentsParts = () => {
  const currentComments = basisComments.slice(commentsCounter, commentsCounter + COMMENTS_PART);
  commentsCounter += currentComments.length;
  getComments(currentComments);

  const commentCountFirstChildNode = commentCount.childNodes[0];
  const index = commentCountFirstChildNode.nodeValue.indexOf('из');
  const subString = commentCountFirstChildNode.nodeValue.slice(index);

  commentCountFirstChildNode.nodeValue = `${commentsCounter} ${subString}`;

  if (commentsCounter === basisComments.length) {
    commentsLoader.classList.add('hidden');
  }
};

const onCommentsLoaderClick = () => {
  createCommentsParts();
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

function openBigPicture(bigPhoto) {
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');

  clearComments();

  const {url, likes, comments, description} = bigPhoto;
  bigPictureImageElement.src = url;
  bigPictureLikesElement.textContent = likes;
  bigPictureCommentsElement.textContent = comments.length;
  bigPictureDescriptionElement.textContent = description;
  basisComments = comments;

  createCommentsParts();

  document.addEventListener('keydown', onPopupEscKeydown);
  bigPictureCloseElement.addEventListener('click', onBigPictureCloseElementClick);
  commentsLoader.addEventListener('click', onCommentsLoaderClick);
}

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentsLoader.classList.remove('hidden');

  document.removeEventListener('keydown', onPopupEscKeydown);
  bigPictureCloseElement.removeEventListener('click', onBigPictureCloseElementClick);
  commentsLoader.removeEventListener('click', onCommentsLoaderClick);

  commentsCounter = 0;
}

export {openBigPicture};

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

const createCommentsParts = (array) => {
  const allComments = array.slice();
  const partComments = allComments.splice(0, COMMENTS_PART);

  getComments(partComments);

  // const commentCountRight = commentCount.childNodes[0];
  // const commentCountBetween = commentCount.childNodes[1];
  // const commentCountLeft = commentCount.childNodes[2];

  if (partComments.length === 0) {
    commentsLoader.classList.add ('hidden');
    commentCount.classList.add ('hidden');
    commentsLoader.removeEventListener('click', () => {});
  }
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

function openBigPicture(bigPictures) {
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');

  clearComments();

  bigPictureImageElement.src = bigPictures.url;
  bigPictureLikesElement.textContent = bigPictures.likes;
  bigPictureCommentsElement.textContent = bigPictures.comments.length;
  bigPictureDescriptionElement.textContent = bigPictures.description;

  createCommentsParts(bigPictures.comments);

  document.addEventListener('keydown', onPopupEscKeydown);
  bigPictureCloseElement.addEventListener('click', onBigPictureCloseElementClick);
  commentsLoader.addEventListener('click', onCommentsLoaderClick);

  function onCommentsLoaderClick (evt) {
    evt.preventDefault();
    createCommentsParts(bigPictures.comments);
  }
}

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onPopupEscKeydown);
  bigPictureCloseElement.removeEventListener('click', onBigPictureCloseElementClick);
}

export {openBigPicture};

// const createCommentsPart = (array, box) => {
//   const allComments = array.slice();
//   const partComments = allComments.splice(0, COMMENTS_PART);
//   let partCommentsLength = partComments.length;
//   box.appendChild(partComments);
//   commentCount.textContent = `${partCommentsLength} из ${array.length}`;

//   if (partCommentsLength === array.length) {
//     commentsLoader.classList.add ('hidden');
//   }

//   const openNextComments = (evt) => {
//     evt.preventDefault();
//     commentsLoader.classList.remove('hidden');
//     const nextCommentsPart = allComments.splice(0, COMMENTS_PART);
//     const nextCommentsLength = nextCommentsPart.length;
//     partCommentsLength = partCommentsLength + nextCommentsLength;

//     if (allComments.length === 0) {
//       commentsLoader.classList.add ('hidden');
//     }
//   };
//   commentsLoader.addEventListener('click', openNextComments);
// };

import {isEscapeKey} from './util.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImageElement = bigPictureElement.querySelector('.big-picture__img img');
const bigPictureLikesElement = bigPictureElement.querySelector('.likes-count');
const bigPictureCommentsElement = bigPictureElement.querySelector('.comments-count');
const bigPictureDescriptionElement = bigPictureElement.querySelector('.social__caption');
const commentsBlock = bigPictureElement.querySelector('.social__comments');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCloseElement = bigPicture.querySelector('.big-picture__cancel');

const renderPhoto = ({url, likes, comments, description}) => {
  bigPictureImageElement.src = url;
  bigPictureLikesElement.innerText = likes;
  bigPictureCommentsElement.innerText = comments.length;
  bigPictureDescriptionElement.innerText = description;

  let commentsBlockInnerHtml = '';

  comments.forEach(({avatar, message, name}) => {
    const commentElement = `<li class="social__comment"><img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35"> <p class="social__text">${message}</p></li>`;
    commentsBlockInnerHtml += commentElement;
  });

  commentsBlock.innerHTML = commentsBlockInnerHtml;
};

const clearPhoto = () => {
  bigPictureImageElement.src = '';
  bigPictureLikesElement.innerText = '';
  bigPictureCommentsElement.innerText = '';
  bigPictureDescriptionElement.innerText = '';
  commentsBlock.innerHTML = '';
};

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

function openBigPicture(miniature) {
  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
  document.body.classList.add('modal-open');

  bigPicture.classList.remove('hidden');
  renderPhoto(miniature);

  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  clearPhoto();

  document.removeEventListener('keydown', onPopupEscKeydown);
}

bigPictureCloseElement.addEventListener('click', () => {
  closeBigPicture();
});

export default openBigPicture;

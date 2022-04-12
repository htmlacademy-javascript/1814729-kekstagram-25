import {openBigPicture} from './big-picture.js';

const photoBox = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content;
const template = templateFragment.querySelector('.picture');

const renderMiniatures = (miniatures) => {
  const fragment = document.createDocumentFragment();

  miniatures.forEach((miniature) => {
    const {url, likes, comments} = miniature;
    const element = template.cloneNode(true);
    const pictureComments = element.querySelector('.picture__comments');
    const pictureLikes = element.querySelector('.picture__likes');
    const pictureImg = element.querySelector('.picture__img');

    pictureImg.src = url;
    pictureComments.textContent = comments.length;
    pictureLikes.textContent = likes;
    element.addEventListener('click', () => {
      openBigPicture(miniature);
    });
    fragment.appendChild(element);
  });
  photoBox.appendChild(fragment);
};

export default renderMiniatures;

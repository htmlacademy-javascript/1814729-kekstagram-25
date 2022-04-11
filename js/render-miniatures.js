import {getRandomArrayElement} from './util.js';
import {openBigPicture} from './big-picture.js';

const photoBox = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content;
const template = templateFragment.querySelector('.picture');
const filters = document.querySelector('.img-filters');
const filterRandomButton = document.querySelector('#filter-random');
const filterDiscussedButton = document.querySelector('#filter-discussed');
const filterDefaultButton = document.querySelector('#filter-default');

let basisMiniatures = null;

const renderMiniatures = (miniatures) => {
  const fragment = document.createDocumentFragment();

  miniatures.forEach((miniature) => {
    const {url, likes, comments} = miniature;
    const element = template.cloneNode(true);
    const pictureComments = element.querySelector('.picture__comments');
    const pictureLikes = element.querySelector('.picture__likes');
    const pictureImg = element.querySelector('.picture__img');

    basisMiniatures = miniatures;

    pictureImg.src = url;
    pictureComments.textContent = comments.length;
    pictureLikes.textContent = likes;
    element.addEventListener('click', () => {
      openBigPicture(miniature);
    });
    fragment.appendChild(element);
  });
  photoBox.appendChild(fragment);
  filters.classList.remove('img-filters--inactive');
};

const clearMiniatures = () => {
  photoBox.querySelectorAll('a').forEach((allMini) => {
    // allMini.remove();
    allMini.innerHTML = '';
  });
};

const openRandom = () => {
  clearMiniatures();

  filterRandomButton.classList.add('img-filters__button--active');
  filterDefaultButton.classList.remove('img-filters__button--active');
  filterDiscussedButton.classList.remove('img-filters__button--active');

  const miniaturesCopy = basisMiniatures.slice();
  const uniqueRandomMiniatures = [];
  for (let i = 0; i < 10; i++) {
    uniqueRandomMiniatures.push(getRandomArrayElement(miniaturesCopy));
  }
};
  // cb(uniqueRandomMiniatures);
  // const randomMiniatures = miniaturesCopy.map(() => getRandomArrayElement(miniaturesCopy));

// if (uniqueRandomMiniatures < 10) {
//   uniqueRandomMiniatures = new Set(randomMiniatures);
// }
// const visibleRandomMiniatures = Array.from(uniqueRandomMiniatures).slice(0, 10);
// renderMiniatures(visibleRandomMiniatures);

const getMiniatureRank = (miniatures) => {
  miniatures.slice().sort((miniatureA, miniatureB) =>
    miniatureB.comments.length - miniatureA.comments.length);
};

const compareMiniatures = (miniatureA, miniatureB) => {
  const rankA = getMiniatureRank(miniatureA);
  const rankB = getMiniatureRank(miniatureB);

  return rankB - rankA;
};

const openDiscussed = () => {
  clearMiniatures();
  compareMiniatures();

  filterDiscussedButton.classList.add('img-filters__button--active');
  filterDefaultButton.classList.remove('img-filters__button--active');
  filterRandomButton.classList.remove('img-filters__button--active');

  basisMiniatures.slice();
};

const openDefault = () => {
  clearMiniatures();

  filterDefaultButton.classList.add('img-filters__button--active');
  filterDiscussedButton.classList.remove('img-filters__button--active');
  filterRandomButton.classList.remove('img-filters__button--active');

  renderMiniatures();
};

const onFilterRandomButtonClick = (evt) => {
  evt.preventDefault();
  openRandom();
};

const onFilterDiscussedButtonClick = (evt) => {
  evt.preventDefault();
  openDiscussed();
};

const onFilterDefaultButtonClick = (evt) => {
  evt.preventDefault();
  openDefault();
};

filterRandomButton.addEventListener('click', onFilterRandomButtonClick);
filterDiscussedButton.addEventListener('click', onFilterDiscussedButtonClick);
filterDefaultButton.addEventListener('click', onFilterDefaultButtonClick);

export default renderMiniatures;


// import {openBigPicture} from './big-picture.js';

// const photoBox = document.querySelector('.pictures');
// const templateFragment = document.querySelector('#picture').content;
// const template = templateFragment.querySelector('.picture');

// const renderMiniatures = (miniatures) => {
//   const fragment = document.createDocumentFragment();

//   miniatures.forEach((miniature) => {
//     const {url, likes, comments} = miniature;
//     const element = template.cloneNode(true);
//     const pictureComments = element.querySelector('.picture__comments');
//     const pictureLikes = element.querySelector('.picture__likes');
//     const pictureImg = element.querySelector('.picture__img');

//     pictureImg.src = url;
//     pictureComments.textContent = comments.length;
//     pictureLikes.textContent = likes;
//     element.addEventListener('click', () => {
//       openBigPicture(miniature);
//     });
//     fragment.appendChild(element);
//   });
//   photoBox.appendChild(fragment);
// };

// export default renderMiniatures;

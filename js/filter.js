import renderMiniatures from './render-miniatures.js';
import {getRandomArrayElement, debounce} from './util.js';
import {RANDOM_COUNT, DEBOUNCE_FILTER} from './constants.js';

const filterSection = document.querySelector('.img-filters');
const filterButtons = filterSection.querySelectorAll('.img-filters__button');
const filterForm = document.querySelector('.img-filters__form');

const clearActiveStatus = () => {
  filterButtons.forEach((filterButton) => {
    filterButton.classList.remove('img-filters__button--active');
  });
};

const getPictures = () => document.querySelectorAll('.picture');

const getDefaultMiniatures = (pictures) => pictures.slice();

const getRandomMiniatures = (pictures) => {
  const currentPictures = pictures.slice();

  const uniqueRandomMiniatures = [];

  while (uniqueRandomMiniatures.length < RANDOM_COUNT) {
    const picture = getRandomArrayElement(currentPictures);

    if (!uniqueRandomMiniatures.some((item) => item.id === picture.id)) {
      uniqueRandomMiniatures.push(picture);
    }
  }

  return uniqueRandomMiniatures;
};

const getSortedMiniatures = (pictures) => pictures.slice().sort((miniatureA, miniatureB) => miniatureB.comments.length - miniatureA.comments.length);

const renderFilteredMiniatures = (filteredMiniatures) => {
  getPictures().forEach((item) => item.remove());
  renderMiniatures(filteredMiniatures);
};

const activateFilters = (pictures) => {
  filterSection.classList.remove('img-filters--inactive');

  filterForm.addEventListener(
    'click',
    debounce((evt) => {
      clearActiveStatus();

      evt.target.classList.add('img-filters__button--active');

      if (evt.target.matches('#filter-default')) {
        renderFilteredMiniatures(getDefaultMiniatures(pictures));
      } else if (evt.target.matches('#filter-random')) {
        renderFilteredMiniatures(getRandomMiniatures(pictures));
      } else if (evt.target.matches('#filter-discussed')) {
        renderFilteredMiniatures(getSortedMiniatures(pictures));
      }
    }, DEBOUNCE_FILTER)
  );
};

export default activateFilters;

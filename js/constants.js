const MAX_STRING_LENGTH = 140;
const COMMENTS_PART = 5;
const MIN_PHOTO_SIZE = 25;
const MAX_PHOTO_SIZE = 100;
const STEP = 25;
const ALERT_SHOW_TIME = 5000;
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const RANDOM_COUNT = 10;
const DEBOUNCE_FILTER = 500;

const FILTERS_CONFIG = {
  chrome: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'grayscale',
    unit: '',
  },
  sepia: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'sepia',
    unit: '',
  },
  marvin: {
    options: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
    style: 'invert',
    unit: '%',
  },
  phobos: {
    options: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'blur',
    unit: 'px',
  },
  heat: {
    options: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'brightness',
    unit: '',
  },
};

export {MAX_STRING_LENGTH, COMMENTS_PART, MIN_PHOTO_SIZE, MAX_PHOTO_SIZE, STEP, FILTERS_CONFIG, ALERT_SHOW_TIME, FILE_TYPES, RANDOM_COUNT, DEBOUNCE_FILTER};

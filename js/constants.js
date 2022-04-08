const MAX_STRING_LENGTH = 140;
const MAX_ID = 25;
const COMMENTS_PART = 5;
const MIN_PHOTO_SIZE = 25;
const MAX_PHOTO_SIZE = 100;
const STEP = 25;
const ALERT_SHOW_TIME = 5000;
const COLOR_MESSAGE_FORM_SUBMIT = '#3c944a';
const COLOR_MESSAGE_FORM_NOT_SUBMIT = '#ff0083';

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

const descriptions = [
  'Пляж',
  'Go to the beach',
  'Море',
  'Красота',
  'Суп',
  'Поехали',
  'Клубника',
  'Коктейли',
  'Самолёт',
  'Хранение обуви',
  'Дорога',
  'Ауди',
  'Красная рыбка',
  'Рыжий кот',
  'Супер-тапки',
  'Небо',
  'Хор',
  'Ретро-машина',
  'Блики',
  'Пальмы',
  'Салат',
  'Закат',
  'Краб',
  'Концерт',
  'Бегемот'
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

const names = [
  'Марта',
  'Майра',
  'Чебурашка',
  'Клава',
  'Туся',
  'Марс',
  'Игорь',
  'Коля',
  'Арчи',
  'Тамара',
  'София',
  'Адриан',
  'Юта',
  'Юрий',
  'Катрин',
];

export {MAX_STRING_LENGTH, MAX_ID, COMMENTS_PART, MIN_PHOTO_SIZE, MAX_PHOTO_SIZE, STEP, FILTERS_CONFIG, ALERT_SHOW_TIME, COLOR_MESSAGE_FORM_SUBMIT, COLOR_MESSAGE_FORM_NOT_SUBMIT, descriptions, messages, names};

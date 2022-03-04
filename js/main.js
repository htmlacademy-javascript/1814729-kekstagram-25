function getRandomNumber (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}
getRandomNumber(20, 80);

function isAllowedString (string, number = 140) {
  if (string.length <= number) {
    return true;
  }
  return false;
}
isAllowedString(130);

const DESCRIPTION = [
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

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

const NAME = [
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

const MAX_ID = 25;
let commentId = 1;
let photoId = 1;

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const genArrayOfObjects = (maxComments, func) => Array.from({length: getRandomNumber(1, maxComments)}, func);

const createPhotoComments = () => ({
  id: commentId++,
  avatar: `img/avatar- ${  getRandomNumber(1, 6)  }.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAME)
});

const createPhoto = () => ({
  url: `photos/ ${  photoId  }.jpg`,
  id: photoId++,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomNumber(15, 200),
  comments: genArrayOfObjects(35, createPhotoComments)
});

const photos = Array.from({length: MAX_ID}, createPhoto);

console.log(photos);

const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

getRandomNumber(20, 80);

const MAX_STRING_LENGTH = 140;
const isAllowedString = (string, number) => string.length <= number;

isAllowedString('dldlmsclc', MAX_STRING_LENGTH);

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

const MAX_ID = 25;
let commentId = 1;
let photoId = 1;

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const genArrayOfObjects = (maxComments, func) => Array.from({length: getRandomNumber(1, maxComments)}, func);

const getComment = () => {
  const messageCount = getRandomNumber(1, 2);
  const newMessages = [];

  for (let i = 1; i <= messageCount; i++) {
    newMessages.push(getRandomArrayElement(messages));
  }

  const finalMessage = newMessages.join(' ');

  return finalMessage;
};

const createPhotoComments = () => ({
  id: commentId++,
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getComment(),
  name: getRandomArrayElement(names)
});

const createPhoto = () => ({
  url: `photos/${photoId}.jpg`,
  id: photoId++,
  description: getRandomArrayElement(descriptions),
  likes: getRandomNumber(15, 200),
  comments: genArrayOfObjects(35, createPhotoComments)
});

const photos = () => Array.from({length: MAX_ID}, createPhoto);

photos();

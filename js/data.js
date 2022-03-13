import {getRandomNumber, getRandomArrayElement, genArrayOfObjects} from './util.js';
import {descriptions, messages, names} from './arrays.js';
import {MAX_ID} from './constants.js';

let commentId = 1;
let photoId = 1;

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

export {photos};

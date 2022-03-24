import {MAX_STRING_LENGTH} from './constants.js';

const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const isAllowedString = (string, number) => string.length <= number;
isAllowedString('dldlmsclc', MAX_STRING_LENGTH);

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const genArrayOfObjects = (maxNumber, func) => Array.from({length: getRandomNumber(1, maxNumber)}, func);

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomNumber, isAllowedString, getRandomArrayElement, genArrayOfObjects, isEscapeKey};

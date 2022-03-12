export const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

getRandomNumber(20, 80);

const MAX_STRING_LENGTH = 140;
const isAllowedString = (string, number) => string.length <= number;

isAllowedString('dldlmsclc', MAX_STRING_LENGTH);

export const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

export const genArrayOfObjects = (maxNumber, func) => Array.from({length: getRandomNumber(1, maxNumber)}, func);

genArrayOfObjects();

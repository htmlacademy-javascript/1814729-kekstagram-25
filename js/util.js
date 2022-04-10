import {ALERT_SHOW_TIME} from './constants.js';

const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const isAllowedString = (string, number) => string.length <= number;

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const genArrayOfObjects = (maxNumber, func) => Array.from({length: getRandomNumber(1, maxNumber)}, func);

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '60px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.color = '#433823';
  alertContainer.style.backgroundColor = '#3c944a';
  alertContainer.style.opacity = 0.7;
  alertContainer.style.textTransform = 'none';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomNumber, isAllowedString, getRandomArrayElement, genArrayOfObjects, isEscapeKey, showAlert};

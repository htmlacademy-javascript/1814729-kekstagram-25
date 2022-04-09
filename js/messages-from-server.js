import {isEscapeKey, showAlert} from './util.js';

const body = document.querySelector('body');
const templateFragmentSuccess = document.querySelector('#success').content;
const templateSuccess = templateFragmentSuccess.querySelector('.success');
const templateFragmentError = document.querySelector('#error').content;
const templateError = templateFragmentError.querySelector('.error');


const success = templateSuccess.cloneNode(true);
const error = templateError.cloneNode(true);

const successButton = success.querySelector('.success__button');
const errorButton = error.querySelector('.error__button');
// const closeSuccessZone = error.querySelector('.success__inner');
// const closeErrorZone = error.querySelector('.error__inner');


const closeWindowSuccess = (evt) => {
  success.remove();
  if (isEscapeKey(evt) || evt.target.closest('.success__inner') === null) {
    evt.preventDefault();
    success.remove();
    error.removeEventListener('click', closeWindowSuccess);
    successButton.removeEventListener('click', closeWindowSuccess);
    document.removeEventListener('keydown', closeWindowSuccess);
  }
};

const openWindowSuccess = () => {
  body.append(success);
  error.addEventListener('click', closeWindowSuccess);
  successButton.addEventListener('click', closeWindowSuccess);
  document.addEventListener('keydown', closeWindowSuccess);
};

const closeWindowError = (evt) => {
  error.remove();
  if (isEscapeKey(evt) || evt.target.closest('.error__inner') === null) {
    evt.preventDefault();
    error.remove();
    error.removeEventListener('click', closeWindowError);
    errorButton.removeEventListener('click', closeWindowError);
    document.removeEventListener('keydown', closeWindowError);
  }
};

const openWindowError = () => {
  body.append(error);
  error.addEventListener('click', closeWindowError);
  errorButton.addEventListener('click', closeWindowError);
  document.addEventListener('keydown', closeWindowError);
};

const onGetDataFail = () => {
  showAlert('Фотографии от других пользователей не загрузились');
};

export {openWindowSuccess, openWindowError, onGetDataFail};

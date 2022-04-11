import {isEscapeKey, showAlert} from './util.js';

const body = document.querySelector('body');
const templateFragmentSuccess = document.querySelector('#success').content;
const templateSuccess = templateFragmentSuccess.querySelector('.success');
const templateFragmentError = document.querySelector('#error').content;
const templateError = templateFragmentError.querySelector('.error');

const openWindowSuccess = () => {
  const success = templateSuccess.cloneNode(true);
  const successButton = success.querySelector('.success__button');

  success.style.zIndex = 100;

  body.append(success);

  const removeSuccessMessage = () => {
    success.remove();
    document.removeEventListener('keydown', onEscPress);
  };

  function onEscPress (evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      removeSuccessMessage();
    }
  }

  const onSuccessCloseButtonClick = () => {
    removeSuccessMessage();
  };

  const onOuterClick = (evt) => {
    if (evt.target.closest('.success__inner') === null) {
      removeSuccessMessage();
    }
  };

  document.addEventListener('keydown', onEscPress);
  successButton.addEventListener('click', onSuccessCloseButtonClick);
  success.addEventListener('click', onOuterClick);
};

const openWindowError = () => {
  const error = templateError.cloneNode(true);
  const errorButton = error.querySelector('.error__button');

  error.style.zIndex = 100;

  body.append(error);

  const removeErrorMessage = () => {
    error.remove();
    document.removeEventListener('keydown', onEscPress);
  };

  function onEscPress (evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      removeErrorMessage();
    }
  }

  const onErrorCloseButtonClick = () => {
    removeErrorMessage();
  };

  const onOuterClick = (evt) => {
    if (evt.target.closest('.success__inner') === null) {
      removeErrorMessage();
    }
  };

  document.addEventListener('keydown', onEscPress);
  errorButton.addEventListener('click', onErrorCloseButtonClick);
  error.addEventListener('click', onOuterClick);
};

const onGetDataFail = () => {
  showAlert('Фотографии от других пользователей не загрузились');
};

// const openWindowMessage = () => {
//   const success = templateSuccess.cloneNode(true);
//   const successButton = success.querySelector('.success__button');

//   success.style.zIndex = 100;

//   body.append(success);

//   const error = templateError.cloneNode(true);
//   const errorButton = error.querySelector('.error__button');

//   error.style.zIndex = 100;

//   body.append(error);

//   const removeMessage = () => {
//     success.remove();
//     error.remove();
//     document.removeEventListener('keydown', onEscPress);
//   };

//   function onEscPress (evt) {
//     if (isEscapeKey(evt)) {
//       evt.preventDefault();
//       removeMessage();
//     }
//   }

//   const onErrorCloseButtonClick = () => {
//     removeMessage();
//   };

//   const onSuccessCloseButtonClick = () => {
//     removeMessage();
//   };

//   const onOuterClick = (evt) => {
//     if (evt.target.closest('.success__inner') === null || evt.target.closest('.error__inner') === null) {
//       removeMessage();
//     }
//   };

//   document.addEventListener('keydown', onEscPress);
//   errorButton.addEventListener('click', onErrorCloseButtonClick);
//   error.addEventListener('click', onOuterClick);
//   successButton.addEventListener('click', onSuccessCloseButtonClick);
//   success.addEventListener('click', onOuterClick);
// };

// export {openWindowMessage, onGetDataFail};


export {openWindowSuccess, openWindowError, onGetDataFail};

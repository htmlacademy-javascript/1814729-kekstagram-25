import {isAllowedString, isEscapeKey} from './util.js';
import {MAX_STRING_LENGTH} from './constants.js';

const form = document.querySelector('#upload-select-image');
const loadPhoto = document.querySelector('#upload-file');
const formCloseElement = document.querySelector('#upload-cancel');
const loadPhotoOverlay = document.querySelector('.img-upload__overlay');
const hashtagsField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');
const body = document.querySelector('body');
const buttonSubmit = document.querySelector('.img-upload__submit');

const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const pristine = new Pristine(form, {
  classTo: 'text__box',
  errorClass: 'text__box--invalid',
  successClass: 'text__box--valid',
  errorTextParent: 'text__box',
  errorTextTag: 'p',
  errorTextClass: 'text__error'
});

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
  }
};

const onFormKeydown = (evt) => {
  evt.stopPropagation();
};

const clearForm = () => {
  loadPhoto.value = '';
  hashtagsField.value = '';
  commentField.value = '';
};

const hashtags = () => {
  hashtagsField.value.split(' ').filter((item) => item !== '');
  return hashtags;
};

const checkHashtagLength = () => {
  hashtags();
  return hashtags.length < 6;
};

const checkHashtag = () => {
  hashtags();
  return hashtags.every((hashtag) => re.test(hashtag));
};

const checkUniqueHashtag = () => {
  hashtags();
  hashtagsField.value.toLowerCase();
  for (let i = 0; i < hashtags.length; i++) {
    for (let j = 0; j < i; j++) {
      if (hashtags[j].toUpperCase() === hashtags[i].toUpperCase()) {
        return false;
      }
    }
  } return true;
};
//   const uniqueHashtags = new Set(hashtagsField);
//   return uniqueHashtags.size === checkHashtagLength();

pristine.addValidator(hashtagsField, checkHashtag, 'хэш-тег начинается с символа #, содержит буквы и числа и не может содержит менее 20 символов');
pristine.addValidator(hashtagsField, checkHashtagLength, 'не более пяти хэш-тегов');
pristine.addValidator(hashtagsField, checkUniqueHashtag, 'хэш-теги не должны повторяться, хэш-теги нечувствительны к регистру');

const validateComment = (string) => isAllowedString(string, MAX_STRING_LENGTH);

pristine.addValidator(commentField, validateComment, 'Длина комментария не более 140 символов');

const activateFormModal = () => {
  loadPhoto.addEventListener('change', openForm);
};

const getValidateStatus = () => {
  const isValid = pristine.validate();
  if (isValid) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
};

const activateFormValidation = () => {
  hashtagsField.addEventListener('input', getValidateStatus);
  commentField.addEventListener('input', getValidateStatus);
};

const desactivateFormValidation = () => {
  hashtagsField.removeEventListener('input', getValidateStatus);
  commentField.removeEventListener('input', getValidateStatus);
};

const onFormCloseElementClick = () => {
  closeForm();
};

const onFormSubmitClick = (evt) => {
  evt.preventDefault();
};

function openForm() {
  loadPhotoOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  formCloseElement.addEventListener('click', onFormCloseElementClick);
  form.addEventListener('submit', onFormSubmitClick);
  hashtagsField.addEventListener('keydown', onFormKeydown);
  commentField.addEventListener('keydown', onFormKeydown);

  activateFormValidation();
}

function closeForm() {
  loadPhotoOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  formCloseElement.removeEventListener('click', onFormCloseElementClick);
  form.removeEventListener('submit', onFormSubmitClick);
  hashtagsField.removeEventListener('keydown', onFormKeydown);
  commentField.removeEventListener('keydown', onFormKeydown);

  desactivateFormValidation();
  clearForm();
}

export default activateFormModal;

import {isAllowedString, isEscapeKey} from './util.js';
import {MAX_STRING_LENGTH} from './constants.js';
import {onEffectFieldClick, activatePhotoResizing, desactivatePhotoResizing, resetEffect, resetScale} from './effects.js';

const form = document.querySelector('#upload-select-image');
const loadPhoto = document.querySelector('#upload-file');
const formCloseElement = document.querySelector('#upload-cancel');
const loadPhotoOverlay = document.querySelector('.img-upload__overlay');
const hashtagsField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');
const body = document.querySelector('body');
const buttonSubmit = document.querySelector('.img-upload__submit');
const listEffects = document.querySelector('.effects__list');

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

const getHashtags = () => {
  const hashtags = hashtagsField.value.split(' ').filter((item) => item !== '');
  return hashtags;
};

const checkHashtagLength = () => {
  const hashtags = getHashtags();
  return hashtags.length < 6;
};

const checkHashtag = () => {
  const hashtags = getHashtags();
  return hashtags.every((hashtag) => re.test(hashtag));
};

const checkUniqueHashtag = () => {
  const hashtags = getHashtags().map((item) => item.toLowerCase());
  const uniqueHashtags = new Set(hashtags);

  return uniqueHashtags.size === hashtags.length;
};

pristine.addValidator(hashtagsField, checkHashtag, 'хэш-тег начинается с символа #, содержит буквы и числа и не может содержать более 20 символов');
pristine.addValidator(hashtagsField, checkHashtagLength, 'не более пяти хэш-тегов');
pristine.addValidator(hashtagsField, checkUniqueHashtag, 'хэш-теги не должны повторяться, хэш-теги нечувствительны к регистру');

const validateComment = (string) => isAllowedString(string, MAX_STRING_LENGTH);

pristine.addValidator(commentField, validateComment, 'Длина комментария не более 140 символов');

const getButtonStatus = () => {
  const isValid = pristine.validate();
  if (isValid) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
};

const activateButtonSubmit = () => {
  hashtagsField.addEventListener('input', getButtonStatus);
  commentField.addEventListener('input', getButtonStatus);
};

const desactivateButtonSubmit = () => {
  hashtagsField.removeEventListener('input', getButtonStatus);
  commentField.removeEventListener('input', getButtonStatus);
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
  listEffects.addEventListener('change', onEffectFieldClick);

  activateButtonSubmit();
  activatePhotoResizing();
  resetEffect();
  resetScale();
}

function closeForm() {
  loadPhotoOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  formCloseElement.removeEventListener('click', onFormCloseElementClick);
  form.removeEventListener('submit', onFormSubmitClick);
  hashtagsField.removeEventListener('keydown', onFormKeydown);
  commentField.removeEventListener('keydown', onFormKeydown);
  listEffects.removeEventListener('change', onEffectFieldClick);


  desactivateButtonSubmit();
  desactivatePhotoResizing();
  clearForm();
}

const activateFormModal = () => {
  loadPhoto.addEventListener('change', openForm);
};

export default activateFormModal;

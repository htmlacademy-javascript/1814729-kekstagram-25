import {isAllowedString, isEscapeKey} from './util.js';
import {MAX_STRING_LENGTH} from './constants.js';

const form = document.querySelector('#upload-select-image');
const loadPhoto = document.querySelector('#upload-file');
const FormCloseElement = document.querySelector('#upload-cancel');
const loadPhotoOverlay = document.querySelector('.img-upload__overlay');
const hashtagsField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');
const body = document.querySelector('body');

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
  form.innerHTML = '';

  pristine.validate();
};

const validateHashtags = (value) => {
  if (!value) {
    return true;
  }

  const hashtags = value.toLowerCase().trim().split(' ');

  const uniqueHashtags = [];

  for (const hashtag of hashtags) {
    if (uniqueHashtags.includes(hashtag)) {
      return false;
    }
    if (!re.test(hashtag)) {
      return false;
    }
    uniqueHashtags.push(hashtag);
  }
  return uniqueHashtags.length <= 5;
};

const validateComment = (string) => isAllowedString(string, MAX_STRING_LENGTH);

function openForm() {
  loadPhotoOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeForm() {
  loadPhotoOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  clearForm();

  document.removeEventListener('keydown', onPopupEscKeydown);
}

const usForm = () => {
  pristine.addValidator(hashtagsField, validateHashtags,  'Невалидные хештеги');
  pristine.addValidator(commentField, validateComment,  'Длина комментария не более 140 символов');

  hashtagsField.addEventListener('keydown', onFormKeydown);
  commentField.addEventListener('keydown', onFormKeydown);

  loadPhoto.addEventListener('change', () => {
    openForm();
  });

  loadPhoto.addEventListener('change', openForm);

  FormCloseElement.addEventListener('click', () => {
    closeForm();
  });

  FormCloseElement.addEventListener('click', closeForm);

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  });
};

export default usForm;

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

function checkHashtagLength () {
  const uniqueHashtags = hashtagsField.value.toLowerCase().split(' ').filter((item) => item !== '');
  return uniqueHashtags.length < 6;
}

function checkHashtag () {
  const uniqueHashtags = hashtagsField.value.toLowerCase().split(' ').filter((item) => item !== '');
  return uniqueHashtags.every((hashtag) => re.test(hashtag));
}

function checkHashtagRepeats () {
  const uniqueHashtags = hashtagsField.value.toLowerCase().split(' ').filter((item) => item !== '');
  for (let i = 0; i < uniqueHashtags.length; i++) {
    for (let j = 0; j < i; j++) {
      if (uniqueHashtags[j].toUpperCase() === uniqueHashtags[i].toUpperCase()) {
        return false;
      }
    }
  } return true;
}

pristine.addValidator(hashtagsField, checkHashtag, 'хэш-тег начинается с символа #, содержит буквы и числа и не может содержать больше 20 символов');
pristine.addValidator(hashtagsField, checkHashtagLength, 'нельзя указать больше пяти хэш-тегов');
pristine.addValidator(hashtagsField, checkHashtagRepeats, 'хэш-теги не должны повторяться (хэш-теги нечувствительны к регистру)');

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

function openForm() {
  loadPhotoOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  formCloseElement.addEventListener('click', () => {
    closeForm();
  });

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  });

  hashtagsField.addEventListener('keydown', onFormKeydown);
  commentField.addEventListener('keydown', onFormKeydown);

  activateFormValidation();

  document.addEventListener('click', (evt) => {
    if (evt.target.closest('.img-upload__form') === null) {
      form.style.display = 'none';
    }
  });
}

function closeForm() {
  loadPhotoOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  formCloseElement.removeEventListener('click', () => {
    closeForm();
  });

  form.removeEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  });

  hashtagsField.removeEventListener('keydown', onFormKeydown);
  commentField.removeEventListener('keydown', onFormKeydown);

  desactivateFormValidation();

  clearForm();
}

export default activateFormModal;

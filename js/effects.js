import {FILTERS_CONFIG, MIN_PHOTO_SIZE, MAX_PHOTO_SIZE, STEP} from './constants.js';

const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const uploadPreview = document.querySelector('.img-upload__preview');
const imgUploadPreview = uploadPreview.querySelector('img');
const sliderFieldset = document.querySelector('.img-upload__effect-level');
const photosScaleSmaller = document.querySelector('.scale__control--smaller');
const photosScaleBigger = document.querySelector('.scale__control--bigger');
const valuePhotoScale = document.querySelector('.scale__control--value');

const onPhotosScaleSmallerClick = () => {
  if (parseInt(valuePhotoScale.value, 10) > MIN_PHOTO_SIZE) {
    valuePhotoScale.value = `${parseInt(valuePhotoScale.value, 10) - STEP}%`;
    imgUploadPreview.style.transform = `scale(${parseInt(valuePhotoScale.value, 10)/100})`;
  }
};

const onPhotosScaleBiggerClick = () => {
  if (parseInt(valuePhotoScale.value, 10) < MAX_PHOTO_SIZE) {
    valuePhotoScale.value = `${parseInt(valuePhotoScale.value, 10) + STEP}%`;
    imgUploadPreview.style.transform = `scale(${parseInt(valuePhotoScale.value, 10)/100})`;
  }
};

const activatePhotoResizing = () => {
  photosScaleSmaller.addEventListener('click', onPhotosScaleSmallerClick);
  photosScaleBigger.addEventListener('click', onPhotosScaleBiggerClick);
};

const desactivatePhotoResizing = () => {
  photosScaleSmaller.removeEventListener('click', onPhotosScaleSmallerClick);
  photosScaleBigger.removeEventListener('click', onPhotosScaleBiggerClick);
};

const resetScale = () => {
  // imgUploadPreview.className = '';
  imgUploadPreview.style.transform = 'none';
  // sliderFieldset.style.display = 'none';
};

const resetEffect = () => {
  imgUploadPreview.className = '';
  imgUploadPreview.style.filter = 'none';
  sliderFieldset.style.display = 'none';
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const setEffect = (value) => {
  sliderFieldset.style.display = 'block';

  const selectedValue = FILTERS_CONFIG[value];

  sliderElement.noUiSlider.updateOptions(selectedValue.options);

  sliderElement.noUiSlider.on('update', (values, handle) => {
    imgUploadPreview.style.filter = `${selectedValue.style}(${values[handle]}${selectedValue.unit})`;

    valueElement.value = values[handle];
  });
};

const onEffectFieldClick = (evt) => {
  imgUploadPreview.className = '';
  imgUploadPreview.classList.add(`effects__preview--${evt.target.value}`);

  if (evt.target.value === 'none') {
    resetEffect();
  } else {
    setEffect(evt.target.value);
  }
};

export {onEffectFieldClick, activatePhotoResizing, desactivatePhotoResizing, resetEffect, resetScale};

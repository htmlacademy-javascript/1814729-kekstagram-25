const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const grayscaleEffect = document.querySelector('#effect-chrome');
const sepiaEffect = document.querySelector('#effect-sepia');
const invertEffect = document.querySelector('#effect-marvin');
const blurEffect = document.querySelector('#effect-phobos');
const brightnessEffect = document.querySelector('#effect-heat');
const nonEffectElement = document.querySelector('#effect-none');
const uploadPreview = document.querySelector('.img-upload__preview');
const imgUploadPreview = uploadPreview.querySelector('img');

const getNonEffect = () => {
  imgUploadPreview.className = '';
  imgUploadPreview.style.filter = 'none';
  sliderElement.style.display = 'none';
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

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

grayscaleEffect.addEventListener('change', () => {
  imgUploadPreview.classList.add('effects__preview--chrome');
  imgUploadPreview.style.filter = 'grayscale';
});

sepiaEffect.addEventListener('change', () => {
  imgUploadPreview.classList.add('effects__preview--sepia');
  imgUploadPreview.style.filter = 'sepia';
});

if (imgUploadPreview.className === 'effects__preview--chrome' || imgUploadPreview.className === 'effects__preview--sepia') {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  });
}

invertEffect.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
      connect: 'lower',
    });
    imgUploadPreview.classList.add('effects__preview--marvin');
    imgUploadPreview.style.filter = 'invert';
  }
});

blurEffect.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
      connect: 'lower',
    });
    imgUploadPreview.classList.add('effects__preview--phobos');
  }
});

brightnessEffect.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
      connect: 'lower',
    });
    imgUploadPreview.classList.add('effects__preview--heat');
  }
});

nonEffectElement.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    getNonEffect();
  }
});


// if (imgUploadPreview.className === 'effects__preview--none') {
// imgUploadPreview.classList.add('effects__preview--none');
// sliderElement.classList.add('hidden');
// sliderElement.noUiSlider.destroy();

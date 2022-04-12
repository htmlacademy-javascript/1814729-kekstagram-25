import {FILE_TYPES} from './constants.js';

const fileChooser = document.querySelector('input[type=file]');
const pictureUploadPreview = document.querySelector('.img-upload__preview img');

const getPreview = () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => (fileName.endsWith(it)));

  if (matches) {
    pictureUploadPreview.src = URL.createObjectURL(file);
  }
};

export default getPreview;

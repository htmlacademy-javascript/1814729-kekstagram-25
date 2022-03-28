import getPhotosData from './data.js';
import renderMiniatures from './render-miniatures.js';
import usForm from './form.js';

renderMiniatures(getPhotosData());
usForm();

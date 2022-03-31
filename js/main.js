import getPhotosData from './data.js';
import renderMiniatures from './render-miniatures.js';
import activateFormModal from './form.js';

renderMiniatures(getPhotosData());
activateFormModal();

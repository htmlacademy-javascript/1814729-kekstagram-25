import renderMiniatures from './render-miniatures.js';
import activateFormModal from './form.js';
import {getData} from './api.js';

getData((miniatures) => {
  renderMiniatures(miniatures);
});

activateFormModal();

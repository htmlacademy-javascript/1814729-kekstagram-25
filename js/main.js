import renderMiniatures from './render-miniatures.js';
import activateFormModal from './form.js';
import {getData} from './api.js';
import {onGetDataFail} from './messages-from-server.js';

getData(renderMiniatures, onGetDataFail);

activateFormModal();

import {photos} from './data.js';

const photoBox = document.querySelector('.pictures');

const templateFragment = document.querySelector('#picture').content;

const template = templateFragment.querySelector('.picture');

const fragment = document.createDocumentFragment();

const miniatures = photos();

miniatures.forEach(({comments, likes, url}) => {
  const element = template.cloneNode(true);
  element.querySelector('.picture__comments').textContent = comments;
  element.querySelector('.picture__likes').textContent = likes;
  element.querySelector('.picture__img').src = url;
  fragment.appendChild(element);
});

photoBox.appendChild(fragment);

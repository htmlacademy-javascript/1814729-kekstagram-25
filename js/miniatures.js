const photoBox = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content;
const template = templateFragment.querySelector('.picture');

const renderMiniatures = (miniatures) => {
  const fragment = document.createDocumentFragment();

  miniatures.forEach(({comments, likes, url}) => {
    const element = template.cloneNode(true);
    element.querySelector('.picture__comments').textContent = comments.length;
    element.querySelector('.picture__likes').textContent = likes;
    element.querySelector('.picture__img').src = url;
    fragment.appendChild(element);
  });

  photoBox.appendChild(fragment);
};

export {renderMiniatures};

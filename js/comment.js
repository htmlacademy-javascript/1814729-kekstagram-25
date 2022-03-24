import {commentsBox, template, openBigPicture} from './big-picture.js';

const getComments = (comments) => {
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const {avatar, message, name} = comment;
    const element = template.cloneNode(true);
    const commentator = element.querySelector('social__picture');
    const commentMessage = element.querySelector('social__text');

    commentator.src = avatar;
    commentator.alt = name;
    commentMessage.textContent = message;
    element.addEventListener('click', () => {
      openBigPicture(comment);
    });
    fragment.appendChild(element);
  });
  commentsBox.appendChild(fragment);

  return commentsBox;
};

// const clearComments = () => {
//   const commentsBoxInnerHtml = '';
// };

export {getComments};

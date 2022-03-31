const commentsBox = document.querySelector('.social__comments');
const templateFragment = document.querySelector('#comments').content;
const template = templateFragment.querySelector('.social__comment');

const getComments = (comments) => {
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const {avatar, message, name} = comment;

    const element = template.cloneNode(true);

    const commentator = element.querySelector('.social__picture');
    const commentMessage = element.querySelector('.social__text');

    commentator.src = avatar;
    commentator.alt = name;
    commentMessage.textContent = message;

    fragment.appendChild(element);
  });

  commentsBox.appendChild(fragment);

  return commentsBox;
};

const clearComments = () => {
  commentsBox.innerHTML = '';
};

export {getComments, clearComments, commentsBox};

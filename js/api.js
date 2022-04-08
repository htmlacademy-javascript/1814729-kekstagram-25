const getData = (onSuccess) => {
  fetch('https://25.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((miniatures) => {
      onSuccess(miniatures);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://25.javascript.pages.academ/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then(() => onSuccess())
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз.');
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Возможно, проблема с сетю.');
    });
};

export {getData, sendData};

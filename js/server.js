import {showAlert} from './util.js';

const SERVER_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

export const fetchData = (onSuccess) => {
  fetch(`${SERVER_URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        showAlert('Не удалось загрузить данные. Попробуйте перезагрузить страницу');
      }
    })
    .then((data) => onSuccess(data))
    .catch(() => {
      showAlert('Не удалось загрузить данные. Попробуйте перезагрузить страницу');
    });
};

export const sendData = (onSuccess, body) => {
  fetch(`${SERVER_URL}`, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess(response.json());
      } else {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .then((data) => onSuccess(data))
    .catch(() => {
      showAlert('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

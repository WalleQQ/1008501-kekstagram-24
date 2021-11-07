import { showAlert, formSuccess, formError } from './util.js';
import { resetEditor } from './photo-editor.js';

const getData = (onSuccess) => {
  fetch('https://24.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        showAlert('Не удалось получить изображения. Обновите страницу');
      }
    })
    .then((pictures) => {
      onSuccess(pictures);
    });

};

const sendData = (onSuccess, onFail, body) =>{
  fetch(
    'https://24.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        resetEditor();
        formSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
        formError();
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};
// console.log(pictures[0].comments[1]);

export {getData, sendData};

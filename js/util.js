import { comments, names, photoDescription } from './array.js';
import { body } from './show-image.js';

const successTemplate = document.querySelector('#success').content;
const errorTemplate = document.querySelector('#error').content;
const ALERT_SHOW_TIME = 5000;

const photoCommentsCount = (min, max) =>  Math.round(Math.random() * (max - min)) + min;

const photoId = (min, max) =>  Math.round(Math.random() * (max - min)) + min;

const likesId = (min, max) => Math.round(Math.random() * (max - min)) + min;

const getPhotoUrl = () => `photos/${photoId(1, 25)}.jpg`;
const getPhotoUrlId = (id) => `photos/${id}.jpg`;

const randomCommentsId1 = () => Math.floor(Math.random() * comments.length);
const randomCommentsId2 = () => Math.floor(Math.random() * comments.length);
const createCommentMessage = () =>  comments[randomCommentsId1()] +  comments[randomCommentsId2()];

const randomNameIndex = () => names[Math.floor(Math.random()*names.length)];
const photoDescriptionIndex = () => photoDescription[Math.floor(Math.random()*photoDescription.length)];

const isEscapeKey = (evt) => evt.key === 'Escape';


const formSuccess = () => {
  const createformSuccessFragment = document.createDocumentFragment();

  createformSuccessFragment.appendChild(successTemplate.cloneNode(true));
  document.querySelector('body').appendChild(createformSuccessFragment);

  const successButton = document.querySelector('.success__button');
  const successContainer = document.querySelector('.success');
  successButton.addEventListener('click', () => {
    successContainer.remove();
  });
};

const formError = () => {
  const createformErrorFragment = document.createDocumentFragment();

  createformErrorFragment.appendChild(errorTemplate.cloneNode(true));
  document.querySelector('body').appendChild(createformErrorFragment);

  const errorButton = document.querySelector('.error__button');
  const errorContainer = document.querySelector('.error');
  errorButton.addEventListener('click', () => {
    errorContainer.remove();
  });
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getPhotoUrl, getPhotoUrlId, photoId, likesId, createCommentMessage, photoCommentsCount, randomNameIndex, photoDescriptionIndex, isEscapeKey, showAlert, formSuccess, formError};

import {isEscapeKey} from './util.js';
import {bigPictureElement, createBigPicture, clearCommentsList, getDescription} from './create-big-picture.js';

const body = document.querySelector('body');
const picturesContainer = document.querySelector('.pictures');
const closeImageButton = document.querySelector('.big-picture__cancel');
const onShowImageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    body.classList.remove('modal-open');
    bigPictureElement.classList.add('hidden');
  }
};

const showImage = (id) => {
  body.classList.add('modal-open');
  bigPictureElement.classList.remove('hidden');

  createBigPicture(id);

  document.addEventListener('keydown', onShowImageEscKeydown);
};

const closeImage = () => {
  body.classList.remove('modal-open');
  bigPictureElement.classList.add('hidden');
  clearCommentsList();

  document.removeEventListener('keydown', onShowImageEscKeydown);
};

picturesContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('picture__img')) {
    showImage(event.target.id);
    getDescription(event.target.alt);
  }
});

closeImageButton.addEventListener('click', () => {
  closeImage();
});

export {showImage, closeImage, body, onShowImageEscKeydown};

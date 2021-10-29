import { body } from './show-image.js';
import { isEscapeKey } from './util.js';

const uploadPhoto = document.querySelector('#upload-file');
const imageEditing = document.querySelector('.img-upload__overlay');
const closeImageEditing = document.querySelector('#upload-cancel');

const onCloseImageEditorEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    body.classList.remove('modal-open');
    imageEditing.classList.add('hidden');
  }
};

const clearUploadPhotoInput = () => {
  uploadPhoto.innerHTML = '';
};

function openImageEditor () {
  body.classList.add('modal-open');
  imageEditing.classList.remove('hidden');

  document.addEventListener('keydown', onCloseImageEditorEscKeydown);
}

function closeImageEditor () {
  body.classList.remove('modal-open');
  imageEditing.classList.add('hidden');
  clearUploadPhotoInput();
}

uploadPhoto.addEventListener('change', () => {
  openImageEditor();
});

closeImageEditing.addEventListener('click', () => {
  closeImageEditor();
});


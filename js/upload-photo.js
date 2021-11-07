import { body } from './show-image.js';
import { isEscapeKey } from './util.js';
import { hashtagsInput, textArea } from './validation.js';
import { resetEditor } from './photo-editor.js';

const uploadPhoto = document.querySelector('#upload-file');
const imageEditing = document.querySelector('.img-upload__overlay');
const closeImageEditing = document.querySelector('#upload-cancel');

hashtagsInput.addEventListener('focus', () => hashtagsInput.classList.add('focused'));
hashtagsInput.addEventListener('blur', () => hashtagsInput.classList.remove('focused'));
textArea.addEventListener('focus', () => textArea.classList.add('focused'));
textArea.addEventListener('blur', () => textArea.classList.remove('focused'));

const onCloseImageEditorEscKeydown = (evt) => {
  if (hashtagsInput.classList.contains('focused') || textArea.classList.contains('focused')) {
    return;
  }
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    body.classList.remove('modal-open');
    imageEditing.classList.add('hidden');
    resetEditor();
  }
};

const clearUploadPhotoInput = () => {
  uploadPhoto.innerHTML = '';
};

const openImageEditor = () => {
  body.classList.add('modal-open');
  imageEditing.classList.remove('hidden');

  document.addEventListener('keydown', onCloseImageEditorEscKeydown);
};

const closeImageEditor = () => {
  body.classList.remove('modal-open');
  imageEditing.classList.add('hidden');
  clearUploadPhotoInput();
  resetEditor();
};

uploadPhoto.addEventListener('change', () => {
  openImageEditor();
});

closeImageEditing.addEventListener('click', () => {
  closeImageEditor();
});

export {openImageEditor, closeImageEditor};

import { createPicture } from './create-picture.js';
// import { createBigPicture } from './create-big-picture.js';
import './show-image.js';
// import './upload-photo.js';
import './photo-editor.js';
import {closeImageEditor} from './upload-photo.js';
import { setImgFormSubmit } from './validation.js';
import { getData } from './api.js';

getData((pictures) => {
  createPicture(pictures);
});

setImgFormSubmit(closeImageEditor);

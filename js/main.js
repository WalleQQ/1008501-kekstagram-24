import { createPicture } from './create-picture.js';
import './show-image.js';
import './photo-editor.js';
import {closeImageEditor} from './upload-photo.js';
import { setImgFormSubmit } from './validation.js';
import { getData } from './api.js';
import { pictures } from './pictures-storage.js';


const startApp = async () => {
  const data = await getData();

  pictures.setData(data);
  createPicture();
  setImgFormSubmit(closeImageEditor);
};

startApp();

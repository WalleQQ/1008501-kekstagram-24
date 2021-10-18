import {photoUrl,  likesId, photoCommentsCount} from './util.js';

const picturesElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const pictureLink = pictureTemplate.querySelector('.picture');
const pictureImg = pictureLink.querySelector('.picture__img');
const pictureLikes = pictureLink.querySelector('.picture__likes');
const pictureComments = pictureLink.querySelector('.picture__comments');

const pictureInfo = () => {
  pictureImg.src = photoUrl;
  pictureLikes.textContent = likesId(15, 200);
  pictureComments.textContent = photoCommentsCount(1, 500);
};

pictureInfo();

const createPictureFragment = document.createDocumentFragment();

const createPicture = () => {
  for (let i = 0; i < 25; i++) {
    const pictureItem = pictureTemplate.cloneNode(true);
    pictureImg.src = photoUrl;
    pictureLikes.textContent = likesId(15, 200);
    pictureComments.textContent = photoCommentsCount(1, 500);
    createPictureFragment.appendChild(pictureItem);
  }
};

createPicture();

picturesElement.appendChild(createPictureFragment);

export {createPicture, pictureInfo};

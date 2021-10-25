import {getPhotoUrlTest, photoId, likesId, photoCommentsCount} from './util.js';

const picturesElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const pictureLink = pictureTemplate.querySelector('.picture');
const pictureImg = pictureLink.querySelector('.picture__img');
const pictureLikes = pictureLink.querySelector('.picture__likes');
const pictureComments = pictureLink.querySelector('.picture__comments');


const createPicture = () => {
  const createPictureFragment = document.createDocumentFragment();

  for (let i = 0; i < 25; i++) {
    const photo = photoId(1, 25);
    const photoUrl = getPhotoUrlTest(photo);
    pictureImg.src = photoUrl;
    pictureImg.dataset.id = photo;
    pictureLikes.textContent = likesId(15, 200);
    pictureComments.textContent = photoCommentsCount(1, 500);
    createPictureFragment.appendChild(pictureTemplate.cloneNode(true));
  }

  picturesElement.appendChild(createPictureFragment);
};

export {createPicture, pictureImg};

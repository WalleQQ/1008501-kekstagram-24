import {getPhotoUrl, likesId, photoCommentsCount, randomNameIndex, photoDescriptionIndex, commentMessage} from './util.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImgContainer = bigPictureElement.querySelector('.big-picture__img');
const bigPictureButtonShowMore = bigPictureElement.querySelector('.comments-loader');
const bigPictureImg = bigPictureImgContainer.querySelector('img');
const bigPictureLikes = bigPictureElement.querySelector('.likes-count');
const bigPictureCommentsElement = bigPictureElement.querySelector('.social__comment-count');
const bigPictureCommentsCount = bigPictureCommentsElement.querySelector('.comments-count');
const commentsItem = bigPictureElement.querySelector('.social__comment');
const commentsItemImg = commentsItem.querySelector('.social__picture');
const commentsItemText = commentsItem.querySelector('.social__text');
const bigPictureImgDescription = bigPictureElement.querySelector('.social__caption');


const createBigPicture = (id) => {
  bigPictureCommentsElement.classList.add('hidden');
  bigPictureButtonShowMore.classList.add('hidden');
  bigPictureImg.src = `photos/${id}.jpg`;
  bigPictureLikes.textContent = likesId(15, 200);
  bigPictureCommentsCount.textContent = photoCommentsCount(1, 500);
  commentsItemImg.src = getPhotoUrl();
  commentsItemImg.alt = randomNameIndex;
  commentsItemText.textContent = commentMessage;
  bigPictureImgDescription.textContent = photoDescriptionIndex;
};


export {createBigPicture, bigPictureElement};

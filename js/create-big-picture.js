import {photoUrl,  likesId, photoCommentsCount, randomNameIndex, photoDescriptionIndex, commentMessage} from './util.js';

const body = document.querySelector('body');
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
const bigPictureCancel = bigPictureElement.querySelector('.big-picture__cancel');


const bigPictureInfo = () => {
  body.classList.add('modal-open');
  bigPictureElement.classList.remove('hidden');
  bigPictureCommentsElement.classList.add('hidden');
  bigPictureButtonShowMore.classList.add('hidden');
  bigPictureImg.src = photoUrl;
  bigPictureLikes.textContent = likesId(15, 200);
  bigPictureCommentsCount.textContent = photoCommentsCount(1, 500);
  commentsItemImg.src = photoUrl;
  commentsItemImg.alt = randomNameIndex;
  commentsItemText.textContent = commentMessage;
  bigPictureImgDescription.textContent = photoDescriptionIndex;
};

bigPictureInfo();

bigPictureCancel.addEventListener('click', () => {
  body.classList.remove('modal-open');
  bigPictureElement.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    body.classList.remove('modal-open');
    bigPictureElement.classList.add('hidden');
  }
});

export {bigPictureInfo};

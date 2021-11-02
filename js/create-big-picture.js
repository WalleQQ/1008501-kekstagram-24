import {getPhotoUrl, likesId, photoCommentsCount, randomNameIndex, photoDescriptionIndex, createCommentMessage} from './util.js';
import {pictureComments, pictureLikes} from './create-picture.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImgContainer = bigPictureElement.querySelector('.big-picture__img');
const bigPictureButtonShowMore = bigPictureElement.querySelector('.comments-loader');
const bigPictureImg = bigPictureImgContainer.querySelector('img');
const bigPictureLikes = bigPictureElement.querySelector('.likes-count');
const bigPictureCommentsElement = bigPictureElement.querySelector('.social__comment-count');
const bigPictureCommentsCount = bigPictureCommentsElement.querySelector('.comments-count');
const bigPictureCommentsCountLoad = bigPictureCommentsElement.querySelector('.comments-load');
const commentsItem = bigPictureElement.querySelector('.social__comment');
const commentsItemImg = commentsItem.querySelector('.social__picture');
const commentsItemText = commentsItem.querySelector('.social__text');
const bigPictureImgDescription = bigPictureElement.querySelector('.social__caption');
const commentsList = bigPictureElement.querySelector('.social__comments');
const showMoreCommentsButton = bigPictureElement.querySelector('.social__comments-loader');


const clearCommentsList = () => {
  commentsList.innerHTML = '';
  bigPictureCommentsCountLoad.textContent = '';
};

const createComments = () => {
  const createPictureFragment = document.createDocumentFragment();

  for (let commentI = 0; commentI < 5; commentI++) {
    bigPictureCommentsCountLoad.textContent++;
    commentsItemImg.src = getPhotoUrl();
    commentsItemImg.alt = randomNameIndex();
    commentsItemText.textContent = createCommentMessage();
    bigPictureImgDescription.textContent = photoDescriptionIndex();
    createPictureFragment.appendChild(commentsItem.cloneNode(true));
    commentsList.appendChild(createPictureFragment);
  }
};


const createCommentsCount = () => {
  bigPictureCommentsCount.textContent = pictureComments.textContent;
};

const createLikesCount = () => {
  bigPictureLikes.textContent = pictureLikes.textContent;
};

const createBigPicture = (id) => {
  bigPictureCommentsElement.classList.remove('hidden');
  bigPictureButtonShowMore.classList.remove('hidden');
  bigPictureImg.src = `photos/${id}.jpg`;
  bigPictureImg.dataset.id = (id);
  bigPictureLikes.textContent = likesId(15, 200);
  createCommentsCount();
  createLikesCount();
  clearCommentsList();
  createComments();
};

showMoreCommentsButton.addEventListener('click', () => {
  createComments();
});

export {createBigPicture, bigPictureElement, clearCommentsList};


import {pictures as picturesData} from './pictures-storage.js';

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
  for (let commentI = 0; commentI < 5; commentI++) {
    const data = picturesData.data[commentI].comments[commentI];
    const createPictureFragment = document.createDocumentFragment();
    bigPictureCommentsCountLoad.textContent++;
    commentsItemImg.src = data.avatar;
    commentsItemImg.alt = data.name;
    commentsItemText.textContent = data.message;

    createPictureFragment.appendChild(commentsItem.cloneNode(true));
    commentsList.appendChild(createPictureFragment);
  }
};

const getDescription = (alt) => {
  bigPictureImgDescription.textContent = alt;
};


const createBigPicture = (id) => {
  const data = picturesData.data;
  const picture = data.find((pic) => {
    if (pic.id === Number(id)) {return pic;}
  });

  bigPictureCommentsElement.classList.remove('hidden');
  bigPictureButtonShowMore.classList.remove('hidden');
  bigPictureImg.src = picture.url;
  bigPictureLikes.textContent = picture.likes;
  bigPictureCommentsCount.textContent = picture.comments.length;
  clearCommentsList();
  createComments();
};

showMoreCommentsButton.addEventListener('click', () => {
  createComments();
});

export {createBigPicture, bigPictureElement, clearCommentsList, getDescription};


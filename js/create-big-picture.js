import {pictures as picturesData} from './pictures-storage.js';


const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImgContainerElement = bigPictureElement.querySelector('.big-picture__img');
const bigPictureButtonShowMoreElement = bigPictureElement.querySelector('.comments-loader');
const bigPictureImgElement = bigPictureImgContainerElement.querySelector('img');
const bigPictureLikesElement = bigPictureElement.querySelector('.likes-count');
const bigPictureCommentsElement = bigPictureElement.querySelector('.social__comment-count');
const bigPictureCommentsCountElement = bigPictureCommentsElement.querySelector('.comments-count');
const bigPictureCommentsCountLoadElement = bigPictureCommentsElement.querySelector('.comments-load');
const commentsItemElement = bigPictureElement.querySelector('.social__comment');
const commentsItemImgElement = commentsItemElement.querySelector('.social__picture');
const commentsItemTextElement = commentsItemElement.querySelector('.social__text');
const bigPictureImgDescriptionElement = bigPictureElement.querySelector('.social__caption');
const commentsList = bigPictureElement.querySelector('.social__comments');
const showMoreCommentsButtonElement = bigPictureElement.querySelector('.social__comments-loader');


const clearCommentsList = () => {
  commentsList.innerHTML = '';
  bigPictureCommentsCountLoadElement.textContent = '';
};

const createComments = () => {
  for (let commentI = 0; commentI < 5; commentI++) {
    const data = picturesData.data[commentI].comments[commentI];
    const createPictureFragment = document.createDocumentFragment();
    bigPictureCommentsCountLoadElement.textContent++;
    commentsItemImgElement.src = data.avatar;
    commentsItemImgElement.alt = data.name;
    commentsItemTextElement.textContent = data.message;

    createPictureFragment.appendChild(commentsItemElement.cloneNode(true));
    commentsList.appendChild(createPictureFragment);
  }
};

const getDescription = (alt) => {
  bigPictureImgDescriptionElement.textContent = alt;
};

const createBigPicture = (id) => {
  const data = picturesData.data;
  const picture = data.find((pic) => {
    if (pic.id === Number(id)) {return pic;}
  });

  bigPictureCommentsElement.classList.remove('hidden');
  bigPictureButtonShowMoreElement.classList.remove('hidden');

  bigPictureImgElement.src = picture.url;
  bigPictureLikesElement.textContent = picture.likes;
  bigPictureCommentsCountElement.textContent = picture.comments.length;
  clearCommentsList();
  createComments();
};

showMoreCommentsButtonElement.addEventListener('click', () => {
  createComments();
});

export {createBigPicture, bigPictureElement, clearCommentsList, getDescription};


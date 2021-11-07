import { pictures } from './pictures-storage.js';

const picturesElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');


const createPicture = () => {
  const allPictures = pictures.data;
  const picturesItemFragment = document.createDocumentFragment();

  allPictures.forEach(({id, url, likes, comments, description}) => {
    const picturesItem = pictureTemplate.cloneNode(true);
    picturesItem.querySelector('.picture__img').id = id;
    picturesItem.querySelector('.picture__img').src = url;
    picturesItem.querySelector('.picture__img').alt = description;
    picturesItem.querySelector('.picture__likes').textContent = likes;
    picturesItem.querySelector('.picture__comments').textContent = comments.length;

    picturesItemFragment.appendChild(picturesItem);
  });

  picturesElement.appendChild(picturesItemFragment);
};


export {createPicture};

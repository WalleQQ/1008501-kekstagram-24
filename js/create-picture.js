import { pictures } from './pictures-storage.js';
import { debounce } from './utils/debounce.js';

const picturesElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');


const filterDiscussed = (first, second) => {
  if(first.likes < second.likes) {
    return 1;
  } else {
    return -1;
  }
};

const filterDefault = (first, second) => {
  if(first.id > second.id) {
    return 1;
  } else {
    return -1;
  }
};

const filterRandom = () =>  Math.random() - 0.5;


const createPicture = (slice) => {

  const allPictures = pictures.data;
  const picturesItemFragment = document.createDocumentFragment();

  allPictures.slice(0, slice).forEach(({id, url, likes, comments, description}) => {
    const picturesItem = pictureTemplate.cloneNode(true);
    picturesItem.querySelector('.picture__img').id = id;
    picturesItem.querySelector('.picture__img').src = url;
    picturesItem.querySelector('.picture__img').alt = description;
    picturesItem.querySelector('.picture__likes').textContent = likes;
    picturesItem.querySelector('.picture__comments').textContent = comments.length;

    picturesItemFragment.appendChild(picturesItem);
  });

  picturesElement.appendChild(picturesItemFragment);
  return picturesItemFragment;
};


const filterForm = document.querySelector('.img-filters__form');

const removeFilterButtonActive = () => {
  document.querySelector('.filter-discussed').classList.remove('img-filters__button--active');
  document.querySelector('.filter-random').classList.remove('img-filters__button--active');
  document.querySelector('.filter-default').classList.remove('img-filters__button--active');
};

const clearPicture = () => {
  const picture = document.getElementsByClassName('picture');
  let el;
  while ((el = picture[0])) {
    el.parentNode.removeChild(el);
  }
};

const clickFilterButton = () => {

  filterForm.addEventListener('click', (evt) => {
    const processDebounce = debounce(() => createPicture());
    const processRandomDebounce = debounce(() => createPicture(10));

    if (evt.target.classList.contains('filter-discussed')) {
      clearPicture();
      removeFilterButtonActive();
      evt.target.classList.add('img-filters__button--active');
      pictures.data.sort(filterDiscussed);
      processDebounce();

    } if (evt.target.classList.contains('filter-random')) {
      clearPicture();
      removeFilterButtonActive();
      evt.target.classList.add('img-filters__button--active');
      pictures.data.sort(filterRandom);
      processRandomDebounce();

    } if (evt.target.classList.contains('filter-default')) {
      clearPicture();
      removeFilterButtonActive();
      evt.target.classList.add('img-filters__button--active');
      pictures.data.sort(filterDefault);
      processDebounce();
    }
  });
};


export {createPicture, clickFilterButton};

import { comments, names, photoDescription } from './array.js';

const photoCommentsCount = (min, max) =>  Math.round(Math.random() * (max - min)) + min;

const photoId = (min, max) =>  Math.round(Math.random() * (max - min)) + min;

const likesId = (min, max) => Math.round(Math.random() * (max - min)) + min;

const getPhotoUrl = () => `photos/${photoId(1, 25)}.jpg`;
const getPhotoUrlTest = (id) => `photos/${id}.jpg`;

const randomCommentsId1 = Math.floor(Math.random() * comments.length);
const randomCommentsId2 = Math.floor(Math.random() * comments.length);
const commentMessage = `${comments[randomCommentsId1]  } ${  comments[randomCommentsId2]}`;

const randomNameIndex = names[Math.floor(Math.random()*names.length)];
const photoDescriptionIndex = photoDescription[Math.floor(Math.random()*photoDescription.length)];

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getPhotoUrl, getPhotoUrlTest, photoId, likesId, commentMessage, photoCommentsCount, randomNameIndex, photoDescriptionIndex, isEscapeKey};

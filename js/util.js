import { comments } from './array.js';

const photoId = (min, max) =>  Math.round(Math.random() * (max - min)) + min;

photoId(1, 25);


const likesId = (min, max) => Math.round(Math.random() * (max - min)) + min;

likesId(15, 200);

const photoUrlId = photoId(1, 25);
const photoUrl = `photos/${photoUrlId}.jpg`;

const randomCommentsId1 = Math.floor(Math.random() * comments.length);
const randomCommentsId2 = Math.floor(Math.random() * comments.length);
const commentMessage = `${comments[randomCommentsId1]  } ${  comments[randomCommentsId2]}`;

// const commentLength = (string, maxLength) => string.length <= maxLength;

// commentLength('Проверяем строку' , 16);

export {photoUrl, photoId, likesId, commentMessage};

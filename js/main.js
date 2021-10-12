import {photoUrl, photoId, likesId, commentMessage} from './util.js';
import {names, photoDescription} from './array.js';


const createPhoto = () => {
  const randomNameIndex = names[Math.floor(Math.random()*names.length)];
  const photoDescriptionIndex = photoDescription[Math.floor(Math.random()*photoDescription.length)];
  return {
    id: photoId(1, 25),
    likes: likesId(15, 200),
    comment: commentMessage,
    name: randomNameIndex,
    avatar: photoUrl,
    description: photoDescriptionIndex,
  };
};
createPhoto();

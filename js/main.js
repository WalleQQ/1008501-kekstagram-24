const comments =
['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const photoDescription =
['Городской пляж',
  'Дорога до пляжа',
  'Море',
  'Девушка на пляже',
  'Суп с рисовыми человечками',
  'Черный спорткар',
  'Клубника',
  'Морс',
  'Самолет пролетает над пляжем',
  'Обувница',
  'Природа',
  'Белая ауди',
  'Салат с семгой, сельдиреем и перцем',
  'Суси с котом',
  'Домашние тапки',
  'Вид на горы с самолета',
  'Оркестр',
  'Ретро автомобиль',
  'Домашние тапочки с подсветкой',
  'Фотография ульцы с пальмами',
  'Еда',
  'Закат',
  'Краб',
  'Концерт',
  'Внедорожник'];

const names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const randomCommentsId1 = Math.floor(Math.random() * comments.length);
const randomCommentsId2 = Math.floor(Math.random() * comments.length);
const commentMessage = `${comments[randomCommentsId1]  } ${  comments[randomCommentsId2]}`;

const photoId = (min, max) =>  Math.round(Math.random() * (max - min)) + min;

photoId(1, 25);


const likesId = (min, max) => Math.round(Math.random() * (max - min)) + min;

likesId(15, 200);


const photoUrlId = photoId(1, 25);
const photoUrl = `photos/${photoUrlId}.jpg`;
// const commentLength = (string, maxLength) => string.length <= maxLength;

// commentLength('Проверяем строку' , 16);


const createPhoto = () => {
  const randomNameIndex = names[Math.floor(Math.random()*names.length)];
  return {
    id: photoId(1, 25),
    likes: likesId(15, 200),
    comment: commentMessage,
    name: randomNameIndex,
    avatar: photoUrl,
  };
};
createPhoto();
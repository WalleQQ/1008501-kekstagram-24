const randomNumber = (min, max) => {
  if (min < 0) {
    return false;
  }

  return Math.round(Math.random() * (max - min)) + min;
};

randomNumber(0, 10);

const commentLength = (string, maxLength) => string.length <= maxLength;

commentLength('Проверяем строку' , 16);


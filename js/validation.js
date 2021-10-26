const hashtagsInput = document.querySelector('.text__hashtags');
const textArea = document.querySelector('.text__description');
const textAreaMaxLength = 140;

hashtagsInput.addEventListener('input', () => {
  if (hashtagsInput.validity.patternMismatch) {
    hashtagsInput.setCustomValidity('Хэштэг начинается с # и должен содержать не больше 20 символов');
  } else {
    hashtagsInput.setCustomValidity('');
  }
  hashtagsInput.reportValidity();
});

textArea.addEventListener('input', () => {
  const valueLength = textArea.value.length;

  if (valueLength > textAreaMaxLength) {
    textArea.setCustomValidity('Введите не больше 140 символов');
  } else {
    textArea.setCustomValidity('');
  }
  textArea.reportValidity();
});

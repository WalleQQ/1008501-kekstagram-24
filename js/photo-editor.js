const imgUploadScaleContainer = document.querySelector('.img-upload__scale');
const imgScaleControlValue = imgUploadScaleContainer.querySelector('.scale__control--value');
const minValue = 0;
const maxValue = 100;
const imgUploadContainer = document.querySelector('.img-upload__preview');
const imgUpload = imgUploadContainer.querySelector('.scale');
imgUpload.style.transform = 'scale(1)';


function decreasingValue () {
  const value = minValue < Number(imgScaleControlValue.value) ? imgScaleControlValue.value = Number(imgScaleControlValue.value) - 25 : imgScaleControlValue.value = 0;
  return imgScaleControlValue.setAttribute('value', value);

}

function increasingValue () {
  const value = maxValue > Number(imgScaleControlValue.value) ? imgScaleControlValue.value = Number(imgScaleControlValue.value) + 25 : imgScaleControlValue.value = 100;
  return imgScaleControlValue.setAttribute('value', value);
}

function decreasingScale () {
  decreasingValue();
  const getScaleValue = imgScaleControlValue.value / 100;
  imgUpload.style.transform = `scale(${getScaleValue})`;
}

function increasingScale () {
  increasingValue();
  const getScaleValue = imgScaleControlValue.value / 100;
  imgUpload.style.transform = `scale(${getScaleValue})`;
}

imgUploadScaleContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('scale__control--smaller')) {
    decreasingScale();

  } else if (event.target.classList.contains('scale__control--bigger')) {
    increasingScale();
  }
});

const effectsList = document.querySelector('.effects__list');

effectsList.addEventListener('click', (event) => {
  if (event.target.classList.contains('effect-none')) {
    imgUpload.className = '';
  } if (event.target.classList.contains('effect-chrome')) {
    imgUpload.className = '';
    imgUpload.classList.add('effects__preview--chrome');
  }  if (event.target.classList.contains('effect-sepia')) {
    imgUpload.className = '';
    imgUpload.classList.add('effects__preview--sepia');
  } if (event.target.classList.contains('effect-marvin')) {
    imgUpload.className = '';
    imgUpload.classList.add('effects__preview--marvin');
  } if (event.target.classList.contains('effect-phobos')) {
    imgUpload.className = '';
    imgUpload.classList.add('effects__preview--phobos');
  } if (event.target.classList.contains('effect-heat')) {
    imgUpload.className = '';
    imgUpload.classList.add('effects__preview--heat');
  }
});



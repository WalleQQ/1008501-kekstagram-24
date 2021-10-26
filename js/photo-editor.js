const imgUploadScaleContainer = document.querySelector('.img-upload__scale');
const imgScaleControlSmaller = imgUploadScaleContainer.querySelector('.scale__control--smaller');
const imgScaleControlBigger = imgUploadScaleContainer.querySelector('.scale__control--bigger');
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
  const getScaleValue = imgScaleControlValue.value / 100;
  imgUpload.style.transform = `scale(${getScaleValue})`;
}

function increasingScale () {
  const getScaleValue = imgScaleControlValue.value / 100;
  imgUpload.style.transform = `scale(${getScaleValue})`;
}

imgScaleControlSmaller.addEventListener('click', () => {
  decreasingValue();

  imgScaleControlValue.addEventListener('change', decreasingScale());
});

imgScaleControlBigger.addEventListener('click', () => {
  increasingValue();

  imgScaleControlValue.addEventListener('change', increasingScale());
});


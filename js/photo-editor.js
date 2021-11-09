const imgUploadScaleContainer = document.querySelector('.img-upload__scale');
const imgScaleControlValue = imgUploadScaleContainer.querySelector('.scale__control--value');
const minValue = 0;
const maxValue = 100;
const imgUploadContainer = document.querySelector('.img-upload__preview');
const imgUpload = imgUploadContainer.querySelector('.scale');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderElementValue = document.querySelector('.effect-level__value');
const effectsList = document.querySelector('.effects__list');
const effectNone = document.querySelector('#effect-none');
const effectChrome = document.querySelector('#effect-chrome');
const effectSepia = document.querySelector('#effect-sepia');
const effectMarvin = document.querySelector('#effect-marvin');
const effectPhobos = document.querySelector('#effect-phobos');
const effectHeat = document.querySelector('#effect-heat');
imgUpload.style.transform = 'scale(1)';


const decreasingValue = () => {
  const value = minValue < Number(imgScaleControlValue.value) ? imgScaleControlValue.value = Number(imgScaleControlValue.value) - 25 : imgScaleControlValue.value = 0;
  return imgScaleControlValue.setAttribute('value', value);

};

const increasingValue = () => {
  const value = maxValue > Number(imgScaleControlValue.value) ? imgScaleControlValue.value = Number(imgScaleControlValue.value) + 25 : imgScaleControlValue.value = 100;
  return imgScaleControlValue.setAttribute('value', value);
};

const decreasingScale = () => {
  decreasingValue();
  const getScaleValue = imgScaleControlValue.value / 100;
  imgUpload.style.transform = `scale(${getScaleValue})`;
};

const increasingScale = () => {
  increasingValue();
  const getScaleValue = imgScaleControlValue.value / 100;
  imgUpload.style.transform = `scale(${getScaleValue})`;
};

imgUploadScaleContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('scale__control--smaller')) {
    decreasingScale();

  } else if (event.target.classList.contains('scale__control--bigger')) {
    increasingScale();
  }
});

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 0,
  step: 1,
  connect: 'lower',
});


sliderElement.noUiSlider.on('update', (__, handle, unencoded) => {
  sliderElementValue.value = unencoded[handle];
  sliderElementValue.setAttribute('value', unencoded);
  if (effectNone.checked) {
    sliderElement.classList.add('hidden');
  } if (effectChrome.checked) {
    sliderElement.classList.remove('hidden');
    imgUpload.style.filter = `grayscale(${sliderElementValue.value})`;
  } if (effectSepia.checked) {
    sliderElement.classList.remove('hidden');
    imgUpload.style.filter = `sepia(${sliderElementValue.value})`;
  } if (effectMarvin.checked) {
    sliderElement.classList.remove('hidden');
    imgUpload.style.filter = `invert(${sliderElementValue.value / 100})`;
  } if (effectPhobos.checked) {
    sliderElement.classList.remove('hidden');
    imgUpload.style.filter = `blur(${sliderElementValue.value}px)`;
  } if (effectHeat.checked) {
    sliderElement.classList.remove('hidden');
    imgUpload.style.filter = `brightness(${sliderElementValue.value})`;
  }
});


effectsList.addEventListener('click', (event) => {
  if (event.target.classList.contains('effect-none')) {
    sliderElement.classList.add('hidden');
    imgUpload.className = '';
    imgUpload.style.filter = '';
  }
  if (event.target.classList.contains('effect-chrome')) {
    imgUpload.className = '';
    imgUpload.classList.add('effects__preview--chrome');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 0.5,
      step: 0.1,
    });
  }

  if (event.target.classList.contains('effect-sepia')) {
    imgUpload.className = '';
    imgUpload.classList.add('effects__preview--sepia');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 0.5,
      step: 0.1,
    });
  }

  if (event.target.classList.contains('effect-marvin')) {
    imgUpload.className = '';
    imgUpload.classList.add('effects__preview--marvin');

    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 60,
      step: 1,
    });
  }

  if (event.target.classList.contains('effect-phobos')) {
    imgUpload.className = '';
    imgUpload.classList.add('effects__preview--phobos');

    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 1.5,
      step: 0.1,
    });
  }

  if (event.target.classList.contains('effect-heat')) {
    imgUpload.className = '';
    imgUpload.classList.add('effects__preview--heat');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 2,
      step: 0.1,
    });
  }
});

const resetEditor = () => {
  document.querySelector('.img-upload__form').reset();
  sliderElement.classList.add('hidden');
  imgScaleControlValue.value = '100';
  imgUpload.style.transform = 'scale(1)';
  imgUpload.className = '';
  imgUpload.style.filter = '';
};

export {resetEditor};

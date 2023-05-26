const getRandomIntegerNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getRandomArray = (array) => array.slice(0, getRandomIntegerNumber(0, array.length - 1));
const checkNumber = (number) => number < 10 ? `0${number}` : number;
const getRandomFloatNumber = (min, max, decimal) => parseFloat(Math.random() * (max - min) + min).toFixed(decimal);
const getRandomArrayElement = (array) => array[getRandomIntegerNumber(0, array.length - 1)];

const shuffleArray = (array) => {
  for(let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export {getRandomIntegerNumber, getRandomArrayElement, getRandomFloatNumber, checkNumber, getRandomArray, shuffleArray};


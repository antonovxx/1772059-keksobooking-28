const getRandomIntegerNumber = (min, max) => {
  const lower = Math.ceil(Math.abs(min), Math.abs(max));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkNumber = (number) => {
  if (number >= 0 && number <= 9) {
    return number.toString().padStart(2, 0);
  }
  return number;
};

const getRandomFloatnumber = (min, max, decimal) => {
  const str = (Math.random() * (max - min) + min).toFixed(decimal);
  return parseFloat(str);
};

const getRandomArrayElement = (array) => array[getRandomIntegerNumber(0, array.length - 1)];

export {getRandomIntegerNumber, getRandomArrayElement, getRandomFloatnumber, checkNumber};


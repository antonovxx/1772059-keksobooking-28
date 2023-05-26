import { getRandomArrayElement, getRandomIntegerNumber, getRandomFloatNumber, checkNumber, getRandomArray, shuffleArray } from './utils.js';

const TITLES = [
  'Милая, уютная квартирка в центре Токио',
  'Аппартаменты для стрессоустойчивых',
  'Сказочное бунгало',
  'Тот самый номер, где останавливался Чикатило',
  'Большой дом для большой семьи',
  'Дворец отрекшегося от престола императора Акихито',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECK_TIME = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Уголовная квартира с толстыми стенами',
  'От прошлого жильца остались только желтые пятна на матрасе',
  'Дом в лабутеновых тонах',
  'Гараж с евроремонтом',
  'В этой комнате проживает еще один мужчина 40 лет',
  'Скандальные соседи - 5 человек',
  'C этой квартиры все девушки выходят замуж',
  'В соседней комнате вебкам студия (мешать не будут)',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const LATITUDE = 35;
const LONGITUDE = 139;
const MIN_PRICE = 1000;
const MAX_PRICE = 20000;
const MIN_ROOMS = 1;
const MAX_ROOMS = 10;
const MIN_GUESTS = 1;
const MAX_GUESTS = 10;
const COUNT_OFFERS = 10;
const LOCATION_DECIMAL = 5;

const createOffer = () => {
  const lat = getRandomFloatNumber(LATITUDE, LATITUDE + 1, LOCATION_DECIMAL);
  const lng = getRandomFloatNumber(LONGITUDE, LONGITUDE + 1, LOCATION_DECIMAL);

  return {
    author: {
      avatar: `../img/avatars/user${checkNumber(getRandomIntegerNumber(1, 11))}.png`,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: {
        lat,
        lng
      },
      price: getRandomIntegerNumber(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomIntegerNumber(MIN_ROOMS, MAX_ROOMS),
      guests: getRandomIntegerNumber(MIN_GUESTS, MAX_GUESTS),
      checkin: getRandomArrayElement(CHECK_TIME),
      checkout: getRandomArrayElement(CHECK_TIME),
      features: getRandomArray(shuffleArray(FEATURES)),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArray(shuffleArray(PHOTOS)),
    },
    location: {
      lat,
      lng,
    },
  };
};

const createOffers = () => Array.from({length: COUNT_OFFERS}, createOffer);

export {createOffers};



import { getRandomArrayElement, getRandomIntegerNumber, getRandomFloatnumber, checkNumber } from './utils.js';

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
  'Скандальные соседи - 5 человек, один из них алкаш',
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
const MAX_PRICE = 1000000;
const MIN_ROOMS = 1;
const MAX_ROOMS = 15;
const MIN_GUESTS = 1;
const MAX_GUESTS = 30;
const COUNT_OFFERS = 10;
const LOCATION_DECIMAL = 5;

let id = 0;

function getAuthor () {
  return {
    id: id++,
    avatar: `../img/avatars/user${checkNumber(getRandomIntegerNumber(0, 11))}.png`,
  };
}

function getLocation () {
  return {
    lat: getRandomFloatnumber(LATITUDE, LATITUDE + 1, LOCATION_DECIMAL),
    lng: getRandomFloatnumber(LONGITUDE, LONGITUDE + 1, LOCATION_DECIMAL),
  };
}

function getOffer () {
  return {
    author: getAuthor(),
    title: getRandomArrayElement(TITLES),
    adress: getLocation(),
    price: getRandomIntegerNumber(MIN_PRICE, MAX_PRICE),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomIntegerNumber(MIN_ROOMS, MAX_ROOMS),
    guests: getRandomIntegerNumber(MIN_GUESTS, MAX_GUESTS),
    checkin: getRandomArrayElement(CHECK_TIME),
    checkout: getRandomArrayElement(CHECK_TIME),
    features: getRandomArrayElement(FEATURES),
    description: getRandomArrayElement(DESCRIPTIONS),
    photos: getRandomArrayElement(PHOTOS),
  };
}

const getOffers = () => Array.from({length: COUNT_OFFERS}, getOffer);

export {getOffers};



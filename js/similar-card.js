import { createOffers } from './data.js';

const APARTMENT_TYPES = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};

const templateCard = document.querySelector('#card').content.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');

const filtrateRoomsEndings = (roomsCount) => {
  switch (roomsCount) {
    case 1:
      return 'комната';
    case 2:
    case 3:
    case 4:
      return 'комнаты';
    default:
      return 'комнат';
  }
};

const filtrateGuestsEndings = (guestsCount) => {
  switch (guestsCount) {
    case 1:
      return 'гостя';
    default:
      return 'гостей';
  }
};

const createPhotos = (photos) => {
  const photosFragment = document.createDocumentFragment();
  photos.forEach((element) => {
    const newPhoto = document.createElement('img');
    newPhoto.classList.add('popup__photo');
    newPhoto.src = element;
    newPhoto.alt = 'Фотография жилья';
    newPhoto.setAttribute('width', '45');
    newPhoto.setAttribute('height', '40');
    photosFragment.appendChild(newPhoto);
  });
  return photosFragment;
};

const createFeatures = (features) => {
  const featuresFragment = document.createDocumentFragment();
  features.forEach((element) => {
    const feature = document.createElement('li');
    feature.classList.add('popup__feature', `popup__feature--${element}`);
    featuresFragment.appendChild(feature);
  });
  return featuresFragment;
};

const createCard = (data) => {
  const {author, offer} = data;
  const card = templateCard.cloneNode(true);

  card.querySelector('.popup__avatar').src = author.avatar || '';
  card.querySelector('.popup__title').textContent = offer.title || '';
  card.querySelector('.popup__text--address').textContent = (offer.address) ? `${offer.address.lat} ${offer.address.lng}` : '';
  card.querySelector('.popup__text--price').textContent = (offer.price) ? `${offer.price} ₽/ночь` : '';
  card.querySelector('.popup__type').textContent = APARTMENT_TYPES[offer.type] || '';
  card.querySelector('.popup__description').textContent = offer.description || '';

  card.querySelector('.popup__text--capacity').textContent = (offer.rooms || offer.guests)
    ? `${offer.rooms} ${filtrateRoomsEndings(offer.rooms)} для ${offer.guests} ${filtrateGuestsEndings(offer.guests)}`
    : 'Не для гостей';

  card.querySelector('.popup__text--time').textContent = (offer.checkin || offer.checkout)
    ? `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`
    : 'Забронировано';


  const cardFeatures = card.querySelector('.popup__features');
  cardFeatures.innerHTML = '';
  if (offer.features) {
    cardFeatures.append(createFeatures(offer.features));
  } else {
    cardFeatures.remove();
  }

  const cardPhotos = card.querySelector('.popup__photos');
  cardPhotos.innerHTML = '';
  if(offer.photos) {
    cardPhotos.append(createPhotos(offer.photos));
  } else {
    cardPhotos.remove();
  }

  return card;
};

mapCanvas.append(createCard(createOffers()[0]));


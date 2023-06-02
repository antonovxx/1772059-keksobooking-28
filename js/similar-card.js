const APARTMENT_TYPES = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};

const templateCard = document.querySelector('#card').content.querySelector('.popup');


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

const innerImg = (parent, cssClass, content) => {
  const element = parent.querySelector(cssClass);
  if(!content) {
    element.remove();
    return;
  }
  element.src = content;
};

const innerSimpleText = (parent, cssClass, content, additionalContent = '') => {
  const element = parent.querySelector(cssClass);
  if(!content) {
    element.remove();
    return;
  }
  element.textContent = `${content} ${additionalContent}`;
};

const innerCapacityText = (parent, cssClass, firstContent, secondContent) => {
  const element = parent.querySelector(cssClass);
  if(!firstContent && !secondContent) {
    element.remove();
    return;
  }
  const firstText = firstContent ? `${firstContent} ${filtrateRoomsEndings(firstContent)}` : '';
  const secondText = secondContent ? `для ${secondContent} ${filtrateGuestsEndings(secondContent)}` : '';
  const devider = firstText && secondText ? ' ' : '';
  element.textContent = `${firstText}${devider}${secondText}`;
};

const innerTimeText = (parent, cssClass, firstContent, secondContent) => {
  const element = parent.querySelector(cssClass);
  if(!firstContent && !secondContent) {
    element.remove();
    return;
  }
  const firstText = firstContent ? `Заезд после ${firstContent}` : '';
  const secondText = secondContent ? `выезд до ${secondContent}` : '';
  const devider = firstText && secondText ? ', ' : '';
  element.textContent = `${firstText}${devider}${secondText}`;
};

const innerPhotos = (parent, cssClass, content) => {
  const element = parent.querySelector(cssClass);
  if(!content.length) {
    element.remove();
    return;
  }

  content.forEach((item) => {
    const img = element.querySelector('.popup__photo').cloneNode(true);
    img.src = item;
    element.append(img);
  });
  element.querySelector('.popup__photo').remove();
};

const innerFeatures = (parent, cssClass, content) => {
  const elements = parent.querySelectorAll(cssClass);
  if(!content) {
    elements.remove();
    return;
  }

  const arrayFeatures = Array.from(elements);
  arrayFeatures.forEach((feature) => {
    for(const item of content) {
      if(feature.classList.value === `popup__feature popup__feature--${item}`) {
        feature.remove();
      }
    }
  });
};

const createCard = (data) => {
  const {author, offer} = data;
  const card = templateCard.cloneNode(true);

  innerImg(card, '.popup__avatar', author.avatar);
  innerSimpleText(card, '.popup__title', offer.title);
  innerSimpleText(card, '.popup__type', APARTMENT_TYPES[offer.type]);
  innerSimpleText(card, '.popup__description', offer.description);
  innerSimpleText(card, '.popup__text--address', offer.address.lat, offer.address.lng);
  innerSimpleText(card, '.popup__text--price', offer.price, '₽/ночь');
  innerCapacityText(card, '.popup__text--capacity', offer.rooms, offer.guests);
  innerTimeText(card, '.popup__text--time', offer.checkin, offer.checkout);
  innerPhotos(card, '.popup__photos', offer.photos);
  innerFeatures(card, '.popup__feature', offer.features);

  return card;
};

export {createCard};



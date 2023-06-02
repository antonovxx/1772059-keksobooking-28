const MAX_PRICE = 100000;

const RESTRICTIONS_TYPE_OF_HOUSING = {
  bungalow: {
    title: 'Бунгало',
    min: 0
  },
  flat: {
    title: 'Квартира',
    min: 1000
  },
  house: {
    title: 'Дом',
    min: 5000
  },
  hotel: {
    title: 'Отель',
    min: 3000
  },
  palace: {
    title: 'Дворец',
    min: 10000
  },
};


const addForm = document.querySelector('.ad-form');
const titleFieldElement = addForm.querySelector('#title');
const priceFieldElement = addForm.querySelector('#price');
const typeFieldElement = addForm.querySelector('#type');
const roomsFieldElement = addForm.querySelector('#room_number');
const guestsCapacityFieldElement = addForm.querySelector('#capacity');
const addFormResetButton = addForm.querySelector('.ad-form__reset');

const pristine = new Pristine(addForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
});

const validatePrice = (value) => {
  const price = Number(value || 0);
  const inRange = price >= Number(priceFieldElement.min) && price <= MAX_PRICE;
  return /^\d+$/.test(value) && inRange;
};

const getPriceMessage = () => `Выберите цену между ${priceFieldElement.min} и ${MAX_PRICE}`;

const setPriceAttributes = (type) => {
  const minPrice = RESTRICTIONS_TYPE_OF_HOUSING[type].min;
  priceFieldElement.min = minPrice;
  priceFieldElement.placeholder = minPrice;
};

setPriceAttributes(typeFieldElement.value);

const changeType = (type = typeFieldElement.value) => {
  setPriceAttributes(type);
  pristine.validate(priceFieldElement);

  priceFieldElement.addEventListener('input', () => {
    pristine.validate(priceFieldElement);
  });
};

typeFieldElement.addEventListener('change', () => {
  pristine.validate(priceFieldElement);
  changeType();
});

const initPriceValidator = () => pristine.addValidator(priceFieldElement, validatePrice, getPriceMessage, 1000, true);

initPriceValidator();



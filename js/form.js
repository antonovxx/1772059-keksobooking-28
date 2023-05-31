const form = document.querySelector('.ad-form');
const formList = form.children;
const mapFilters = document.querySelector('.map__filters');
const mapFiltersList = mapFilters.children;

const disablePage = () => {
  form.classList.add('ad-form--disabled');
  for(const element of formList) {
    element.setAttribute('disabled', 'disabled');
  }

  mapFilters.classList.add('map__filters--disabled');
  for(const element of mapFiltersList) {
    element.setAttribute('disabled', 'disabled');
  }
};

const activateForm = () => {
  form.classList.remove('ad-form--disabled');
  for(const element of formList) {
    element.removeAttribute('disabled');
  }
};

const activateMapFilters = () => {
  mapFilters.classList.remove('map__filters--disabled');
  for(const element of mapFiltersList) {
    element.removeAttribute('disabled');
  }
};



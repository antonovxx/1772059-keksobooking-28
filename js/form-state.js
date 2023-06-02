const addForm = document.querySelector('.ad-form');
const addFormList = addForm.querySelectorAll('fieldset');
const filtersForm = document.querySelector('.map__filters');
const filtersFormList = filtersForm.querySelectorAll('fieldset', 'select');

const setElementsState = (elements, state) => {
  elements.forEach((element) => (element.disable = state));
};


const disableAddForm = () => {
  addForm.classList.add('ad-form--disabled');
  setElementsState(addFormList, true);
};

const disableFiltersForm = () => {
  filtersForm.classList.add('map__filters--disabled');
  setElementsState(filtersFormList, true);
};

const activateForm = () => {
  addForm.classList.remove('ad-form--disabled');
  setElementsState(addFormList, false);
};

const activateMapFilters = () => {
  filtersForm.classList.remove('map__filters--disabled');
  setElementsState(filtersFormList, false);
};

export {disableAddForm, disableFiltersForm, activateForm, activateMapFilters};

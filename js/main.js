
import { createOffers } from './data.js';
import { createCard } from './similar-card.js';
import {disableAddForm, disableFiltersForm, activateForm, activateMapFilters} from './form-state.js';
import './validate-form.js';

const mapCanvas = document.querySelector('#map-canvas');

mapCanvas.append(createCard(createOffers()[0]));

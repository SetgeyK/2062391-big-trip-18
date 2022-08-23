import FilterView from './view/filter-view.js';
import NewFormView from './view/create-form-view.js';
import TripPresenter from './presenter/trip-presenter.js';
import { RenderPosition, render } from './render.js';


const siteMainContainer = document.querySelector('.trip-main');
const siteTripControlsFilters = document.querySelector('.trip-controls__filters');
const siteTripEvents = document.querySelector('.trip-events');
const tripPresenter = new TripPresenter();

render(new NewFormView(), siteMainContainer, RenderPosition.AFTERBEGIN);
render(new FilterView(), siteTripControlsFilters);

tripPresenter.init(siteTripEvents);


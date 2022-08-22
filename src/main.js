import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import NewFormView from './view/create-form-view.js';
import EditFormView from './view/edit-form-view.js';
import PointView from './view/point-view.js';
import { RenderPosition, render } from './render.js';

const siteHeaderContainer = document.querySelector('.page-header');
const siteHeaderElement = document.querySelector('.trip-main__trip-controls');
const siteTripEvents = document.querySelector('.trip-events');

render(new NewFormView(), siteHeaderContainer);
render(new FilterView(), siteHeaderElement);
render(new SortView(), siteTripEvents);
for (let i = 0; i < 3; i++) {
  render(new PointView(), siteTripEvents);
}
render(new EditFormView(), siteTripEvents, RenderPosition.BEFOREBEGIN);

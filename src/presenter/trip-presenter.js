import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import NewFormView from './view/create-form-view.js';
import EditFormView from './view/edit-form-view.js';
import PointView from './view/point-view.js';

import { render } from './render.js';
import { RenderPosition } from './render.js';

export default class TripPresenter {
  fiterComponent = new FilterView();
}

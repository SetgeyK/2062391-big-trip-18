import SortView from '../view/sort-view.js';
import EditFormView from '../view/edit-form-view.js';
import PointView from '../view/point-view.js';
import { render } from '../render.js';
import TripEventsList from '../view/trip-events-list.js';

export default class TripPresenter {
  eventsListComponent = new TripEventsList();

  init = (tripContainer) => {
    this.tripContainer = tripContainer;

    render(new SortView(), this.tripContainer);
    render(this.eventsListComponent, this.tripContainer);
    render(new EditFormView(), this.eventsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.eventsListComponent.getElement());
    }
  };
}

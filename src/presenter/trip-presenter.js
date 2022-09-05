import SortView from '../view/sort-view.js';
import EditFormView from '../view/edit-form-view.js';
import PointView from '../view/point-view.js';
import { render } from '../render.js';
import TripEventsList from '../view/trip-events-list.js';

export default class TripPresenter {
  eventsListComponent = new TripEventsList();

  init = (tripContainer, pointsModel, destinationModel) => {
    this.tripContainer = tripContainer;
    this.pointsModel = pointsModel;
    this.destinationModel = destinationModel;
    this.points = [...this.pointsModel.getPoints()];
    this.destinations = [...this.destinationModel.getDestinations()];

    render(new SortView(), this.tripContainer);
    render(this.eventsListComponent, this.tripContainer);
    render(new EditFormView(this.points, this.destinations), this.eventsListComponent.getElement());

    for (let i = 0; i < this.points.length; i++) {
      render(new PointView(this.points[i], this.destinations[i]), this.eventsListComponent.getElement());
    }
  };
}

import { createElement } from '../render';

const createTripEventsTemplate = () => (`
  <ul class="trip-events__list">
  </ul>
`);

export default class TripEventsList {
  getTemplate() {
    return createTripEventsTemplate();
  }

  getElement() {
    if (!this.element){
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

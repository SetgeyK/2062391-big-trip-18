import { createElement } from '../render';
import dayjs from 'dayjs';

const createPointTemplate = (point, destination) => {
  const { dateFrom, dateTo, basePrice, type, offer} = point;
  const { name, pictures} = destination;

  return (`
    <li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="2019-03-18">${dayjs(dateFrom).format('MMM DD')}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="${pictures.src}" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} ${name}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-18T10:30">${dateFrom.format('HH:mm')}</time>
            —
            <time class="event__end-time" datetime="2019-03-18T11:00">${dateTo.format('HH:mm')}</time>
          </p>
          <p class="event__duration">${dayjs(dateTo).diff(dateFrom, 'minute')}</p>
        </div>
        <p class="event__price">
          €&nbsp;<span class="event__price-value">${basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          <li class="event__offer">
            <span class="event__offer-title">${offer.title}</span>
            +€&nbsp;
            <span class="event__offer-price">${offer.price}</span>
          </li>
        </ul>
        <button class="event__favorite-btn event__favorite-btn--active" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
  `);
};

export default class PointView {
  constructor(point, destination) {
    this.point = point;
    this.destination = destination;
  }

  getTemplate() {
    return createPointTemplate(this.point, this.destination);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

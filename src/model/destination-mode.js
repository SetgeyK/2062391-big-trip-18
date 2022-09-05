import { generateDestination } from '../mock/destinations';

export default class DestinationsModel {
  destinations = Array.from({length: 15 }, generateDestination);

  getDestinations() {
    return this.destinations;
  }
}

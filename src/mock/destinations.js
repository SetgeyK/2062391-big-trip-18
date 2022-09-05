import { getRandomInteger } from '../utils';
import { CITY_NAMES, DESCRIPTION } from './const';

export const generateDestination = () => ({
  id: 0,
  description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
  name: CITY_NAMES[getRandomInteger(0, CITY_NAMES.length - 1)],
  pictures: [
    {
      src: `http://picsum.photos/248/152?r=${getRandomInteger(0, 123)}`,
      description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)]
    }
  ]
});

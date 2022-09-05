import { getRandomInteger } from '../utils';
import dayjs from 'dayjs';

const generateOfferType = () => {
  const offerTypes = [
    'Taxi',
    'Bus',
    'Train',
    'Ship',
    'Drive',
    'Flight',
    'Check-in',
    'Sightseeing',
    'Restaurant'
  ];
  const randomIndex = getRandomInteger(0, offerTypes.length - 1);
  return offerTypes[randomIndex];
};

const generatePoint = () => ({
  basePrice: getRandomInteger(500, 1000),
  dateFrom: dayjs().subtract(1, 'day'),
  dateTo: dayjs().add(1, 'day'),
  destination: 0,
  id: getRandomInteger(0, 10),
  offer: {
    id: 1,
    title: 'Upgrade to a business class',
    price: getRandomInteger(10, 150)
  },
  type: generateOfferType()
});

export { generatePoint };

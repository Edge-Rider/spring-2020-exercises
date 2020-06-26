import { DateTime } from 'luxon';

export default (origin, destination) => {
  const when = DateTime.local().plus({ days: 1 }).toFormat('dd/MM/yyyy');
  const query = new URLSearchParams({
    partner: 'picky',
    fly_from: origin,
    fly_to: destination,
    date_from: when,
    date_to: when,
    limit: 5
  });
  const url = new URL(`?${query}`, 'https://api.skypicker.com/flights');

  return fetch(url);
}

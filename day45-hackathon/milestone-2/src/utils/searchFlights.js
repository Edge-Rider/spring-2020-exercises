import { DateTime } from 'luxon';

const searchFlights = async (origin, destination) => {
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

  try {
    const res = await fetch(url);
    const flights = await res.json();
    return flights.data;
  } catch (err) {
    console.log('searchFlights error:', err)
  }
}

export default searchFlights

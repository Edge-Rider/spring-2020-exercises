import React from 'react';
import { Container, Spinner } from 'reactstrap';
import searchFlights from 'utils/searchFlights.js';
import FlightsList from 'components/FlightsList';
import Typography from 'components/Typography';
import './index.scss';

const SearchPage = (props) => {
  const { flights, isLoading, search, error, pleaseSelect } = props;
  let child = null;

  if (isLoading) {
    child = (
      <>
        <Spinner size="sm" color="primary" />
        'Loading ...'
      </>
    );
  } else if (pleaseSelect) {
    child = (<Typography>Please select your origin and destination</Typography>);
  } else if (error) {
    child = (<Typography>{error.message}</Typography>);
  } else if (flights.length) {
    child = (<FlightsList flights={flights} {...search} />);
  } else {
    child = (<Typography>No results ...</Typography>);
  }

  return (
    <Container className="search">
      {child}
    </Container>
  );
}

export default SearchPage

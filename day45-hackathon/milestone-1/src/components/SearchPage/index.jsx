import React from 'react';
import { Container, Spinner } from 'reactstrap';
import searchFlights from 'utils/searchFlights.js';
import FlightsList from 'components/FlightsList';
import Typography from 'components/Typography';
import './index.scss';

export default class SearchPage extends React.Component {
  
  state = {
    search: {
      origin: 'PRG',
      destination: 'VLC',
    },
    error: null,
    isLoading: true,
    flights: [],
  };

  componentDidMount() {
    const { origin, destination } = this.state.search;

    searchFlights(origin, destination)
      .then(resp => resp.json()) 
      .then(json => {
        this.setState({ 
          flights: json.data, 
          isLoading: false })
        });
  }

  render() {
    const { flights, isLoading, search, error } = this.state;
    let child = null;

    if (isLoading) {
      child = (
        <>
          <Spinner size="sm" color="primary" />
          'Loading ...'
        </>
      );
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
}


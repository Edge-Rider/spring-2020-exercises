import React from 'react';
import { Alert } from 'reactstrap';
import Typography from 'components/Typography';
import { Time, Duration } from 'components/TimeUtils';
import './index.scss';

export default class FlightList extends React.Component {  
  render() {
    const { flights, origin, destination } = this.props;

    return (
      <div className='flight-list'>
        <div className='flight-list-header'>
          <Alert className="d-flex align-items-center" color="primary">
            <i className="lg-icon icon-checkmark mr-3" />
            <span>
              Showing {flights.length} flights from {origin} to {destination}:
            </span>
          </Alert>
        </div>
        <div className='flight-list-items'>
          {flights.map(flight => (
            <div key={flight.id} className='flight-list-item'>
              <div>
                <div>
                  <Time datetime={flight.dTime} />
                  <Typography> - </Typography>
                  <Time datetime={flight.aTime} />
                </div>
              </div>
              <div>
                <div>
                  <Duration arrival={flight.aTimeUTC} departure={flight.dTimeUTC} />
                </div>
                <div>
                  <Typography type='secondary'>
                    {flight.cityFrom} ({flight.flyFrom}) -> {flight.cityTo} ({flight.flyTo})
                  </Typography>
                </div>
              </div>
              <div>
                <Typography>{flight.price} EUR</Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

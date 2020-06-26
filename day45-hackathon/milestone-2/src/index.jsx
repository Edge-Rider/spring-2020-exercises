import React, { Component } from 'react';
import { render } from 'react-dom';
import SearchPage from 'components/SearchPage';
import Header from 'components/Header'
import searchFlights from 'utils/searchFlights';
import { origins, destinations } from 'const/airports'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'icons.css';
import 'index.html';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: {
        origin: null,
        destination: null,
      },
      error: null,
      isLoading: false,
      pleaseSelect: true,
      flights: []
    };
  }

  getFlights = async () => {
    const { origin, destination } = this.state.search;
    this.setState({
      isLoading: true,
    })
      const flights = await searchFlights(origin, destination);

      this.setState({
        flights: flights,
        isLoading: false,
        pleaseSelect: false,
      });
  }

  setSearchLocation = async (location, position) => {
      await this.setState(prevState => ({
        search: {
          ...prevState.search,
          [position]: location,
        }
      }))
      const { origin, destination } = this.state.search
      if (origin && destination) {
        this.getFlights()
      }
  }

  render() {
    const { flights, isLoading, search, error, pleaseSelect } = this.state;
    return (
      <>
        <Header
          origins={origins}
          destinations={destinations}
          setSearchLocation={this.setSearchLocation}
          currentSelection={search}
        />
        <SearchPage
          search={search}
          isLoading={isLoading}
          flights={flights}
          pleaseSelect={pleaseSelect}
          error={error}
        />
      </>
    );
  }
}

render(<App />, document.querySelector('#app'));

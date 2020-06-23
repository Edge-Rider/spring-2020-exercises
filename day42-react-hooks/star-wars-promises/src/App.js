import React, { Component } from "react";
import "./App.css";
import FilmDetails from "./Components/FilmDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: null,
      characterOfTheFilm: null,
    };
  }

  fetchTheData = () => {
    const url = "https://swapi.dev/api/";
    fetch(url + "films/1/")
      .then((response) => response.json())
      .then((data) => this.setState({ film: data }))
      .then(() => this.fetchOtherData(this.state.film.characters[0]))
      .catch((error) => console.log(error));
  };

  fetchOtherData = (url) => {
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ characterOfTheFilm: data }));
  };

  componentDidMount() {
    this.fetchTheData();
  }

  render() {
    return (
      <div>
        <h1>The Star Wars API</h1>
        {this.state.film ? (
          <FilmDetails
            title={this.state.film.title}
            release_date={this.state.film.release_date}
          />
        ) : (
          <h2>No Film available</h2>
        )}
      </div>
    );
  }
}

export default App;

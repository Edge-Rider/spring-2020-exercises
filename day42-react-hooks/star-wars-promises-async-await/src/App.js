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

  // fetchTheData = () => {
  //   const url = "https://swapi.dev/api/";
  //   fetch(url + "films/1/")
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ film: data }))
  //     .then(() => this.fetchOtherData(this.state.film.characters[0]))
  //     .catch((error) => console.log(error));
  // };

  // fetchOtherData = (url) => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ characterOfTheFilm: data }));
  // };

  fetchTheData = async () => {
    const url = "https://swapi.dev/api/";
    const filmResponse = await fetch(url);
    const fimlData = await filmResponse.json();
    const characterResponse = await fetch(this.state.film.characters[0]);
    const characterData = characterResponse.json();
    return this.setState({ film: fimlData, characterOfTheFilm: characterData });
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

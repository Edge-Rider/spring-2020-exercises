import React, { Component } from "react";
import "./App.css";
import FilmDetails from "./Components/FilmDetails";
import FilmCharacter from "./Components/FilmCharacter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: null,
      characterOfTheFilm: null,
    };
  }

  // fetcing the data for both the film and when the film is already set to state we are fetching the data for the first character of the film
  fetchTheData = () => {
    const url = "https://swapi.dev/api/";
    fetch(url + "films/1/")
      .then((response) => response.json())
      .then((data) => this.setState({ film: data }))
      .then(() => this.fetchOtherData(this.state.film.characters[0]));
  };

  fetchData = async () => {
    const url = "https://swapi.dev/api/";
    const response = await fetch(url + "films/1/");
    const data = await response.json();
    this.setState({ film: data });
    return data;
  };

  //function for fetching data of the character
  fetchOtherData = (url) => {
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ characterOfTheFilm: data }));
  };

  componentDidMount() {
    //calling the function to fetch data
    this.fetchTheData();
  }

  render() {
    return (
      <div>
        <h1>The Star Wars API</h1>
        {/**conditionally render the film details if the film is already present or we display no film available */}
        {this.state.film ? (
          <FilmDetails
            title={this.state.film.title}
            release_date={this.state.film.release_date}
          />
        ) : (
          <h2>No Film available</h2>
        )}

        {/**conditionally render the characterOfTheFilm details if the characterOfTheFilm is already present or we display no characterOfTheFilm available and pass the props down to the children component as a parameter of the function*/}
        {this.state.characterOfTheFilm ? (
          <FilmCharacter characterOfTheFilm={this.state.characterOfTheFilm} />
        ) : (
          <h2>No character available</h2>
        )}
      </div>
    );
  }
}

export default App;

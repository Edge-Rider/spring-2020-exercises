import React, { Component } from "react";

class FilmDetails extends Component {
  render() {
    return (
      <ul>
        <li>
          title:<h2>{this.props.title}</h2>
        </li>
        <li>
          release date:<h2>{this.props.release_date}</h2>
        </li>
      </ul>
    );
  }
}

export default FilmDetails;

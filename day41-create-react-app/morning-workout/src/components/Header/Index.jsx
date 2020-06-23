import React from "react";
import Navigation from "./Navigation.jsx";
import UserInfo from "./UserInfo.jsx";

class Header extends React.Component {
  //component with the header in here we also import the UserInfo and Navigation component
  render() {
    return (
      <header>
        <img
          src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture.png"
          alt="Aperture science"
          class="logo"
        />

        <UserInfo />

        <Navigation />
      </header>
    );
  }
}

export default Header;

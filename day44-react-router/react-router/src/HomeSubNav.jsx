import React from "react";
import { Link } from "react-router-dom";

const HomeSubNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/home/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HomeSubNav;

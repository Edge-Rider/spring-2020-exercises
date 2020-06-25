import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-container">
      <div>
        <h3>Nav!</h3>
      </div>
      <ul>
        <li>
          {/**Router's Link to change the window.location in browser to the prop that we pass in `to` similar to <a href="" /> the differnce is that it does not reload the browser */}
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

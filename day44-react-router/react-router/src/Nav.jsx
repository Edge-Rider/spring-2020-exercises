import React from "react";

const Nav = () => {
  return (
    <nav className="nav-container">
      <div>
        <h3>Nav!</h3>
      </div>
      <ul>
        <li to="/home">Home</li>
        <li to="/users">Users</li>
      </ul>
    </nav>
  );
};

export default Nav;

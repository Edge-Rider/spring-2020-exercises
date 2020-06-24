import React from "react";

const DropDown = ({ handleItemClick }) => {
  return (
    <ul className="dd-list">
      <li className="dd-list-item" onClick={handleItemClick}>
        1
      </li>
      <li className="dd-list-item" onClick={handleItemClick}>
        2
      </li>
      <li className="dd-list-item" onClick={handleItemClick}>
        3
      </li>
    </ul>
  );
};

export default DropDown;

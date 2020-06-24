import React from "react";

const Header = ({ handleDropdownClick, dropdownValue }) => {
  return (
    <div className="dd-header" onClick={handleDropdownClick}>
      <div className="dd-header-title">{dropdownValue}</div>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import "./App.css";
import DropDown from "./components/DropDown";
import Header from "./components/Header";

const App = () => {
  const [value, setValue] = useState("");
  const [dropdownClosed, setDropdownClosed] = useState(true);
  const [dropdownValue, setDropdownValue] = useState("Select Something");

  const handleTextInputChange = (event) => {
    return setValue(event.target.value);
  };

  const handleDropdownClick = () => {
    return setDropdownClosed(!dropdownClosed);
  };

  const handleItemClick = (event) => {
    setDropdownValue(event.target.innerText);
    setDropdownClosed(true);
  };

  return (
    <div>
      <input
        className="dd-input"
        type="text"
        value={value}
        onChange={handleTextInputChange}
      />
      <div className="dd-wrapper">
        <Header
          handleDropdownClick={handleDropdownClick}
          dropdownValue={dropdownValue}
        />
        {!dropdownClosed && <DropDown handleItemClick={handleItemClick} />}
      </div>
    </div>
  );
};
export default App;

import React from "react";

const SearchBar = ({
  searchValue,
  handleInputChange,
  handleSearchClick,
  handleKeyPress,
}) => {
  return (
    <div className="searchBar-container" onKeyUp={handleKeyPress}>
      {/**we are setting searchValue to be the what we type in by calling our method handleInputChange we created in the App.jsx this function sets state of the searchValue by targeting the input prop value */}
      <input className="searchBar-input" onChange={handleInputChange} />
      <button className="searchBar-button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;

import React from "react";

const SearchBar = ({
  searchValue,
  handleInputChange,
  handleSearchClick,
  handleKeyPress,
}) => {
  return (
    <div className="searchBar-container" onKeyUp={handleKeyPress}>
      <input
        className="searchBar-input"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button className="searchBar-button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;

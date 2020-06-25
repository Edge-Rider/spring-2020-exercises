import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

const url =
  "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=";
const pageOffsetPrefix = "&sroffset=";

const App = () => {
  const handleInputChange = (e) => {};

  const handleSearchClick = () => {};

  const handleKeyPress = (e) => {};

  return (
    <div className="App">
      <SearchBar
        handleInputChange={handleInputChange}
        handleSearchClick={handleSearchClick}
        handleKeyPress={handleKeyPress}
      />
      <SearchResults />
    </div>
  );
};

export default App;

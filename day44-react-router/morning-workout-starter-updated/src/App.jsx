import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

const url =
  "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=";
const pageOffsetPrefix = "&sroffset=";

const App = () => {
  const [searchValue, setSearchValue] = useState("");

  const [whateverValue, setWhateverValue] = useState("");
  //createing the functional component's state and initiating it with 0 value, because we want to start to fetch data at the very first index in array of data in database
  const [currentOffset, setCurrentOffset] = useState(0);

  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  //this sets currentOffset on each click to previous offset + 10;
  const handleNextPageClick = () => {
    setCurrentOffset(currentOffset + 10);
  };

  const handleSearchClick = async () => {
    if (!searchValue) return;
    // created url by concatigating string from base url, searchValue, then as long as we would like to fetch more and more reasults on each click we set the offset, we take pageOffsetPrefix from wiki and after it we will set the currentOffset
    const fetchUrl = `${url}${searchValue}${pageOffsetPrefix}${currentOffset}`;
    const response = await fetch(fetchUrl);
    console.log(response);
    const data = await response.json();
    console.log(data);
    setSearchResults(data.query.search);
  };

  //when you press enter the search API will be called
  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearchClick();
  };

  //if the currentOffset changes then we fetch the new data
  useEffect(() => {
    handleSearchClick();
  }, [currentOffset]);

  return (
    <div className="App">
      <SearchBar
        searchValue={searchValue}
        handleInputChange={handleInputChange}
        handleSearchClick={handleSearchClick}
        handleKeyPress={handleKeyPress}
      />
      <input
        type="text"
        name="whatever"
        value={whateverValue}
        onChange={(e) => setWhateverValue(e.target.value)}
      />
      <SearchResults
        searchResults={searchResults}
        handleNextPageClick={handleNextPageClick}
      />
    </div>
  );
};

export default App;

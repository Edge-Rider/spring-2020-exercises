import React from "react";

const SearchResults = ({ searchResults, handleNextPageClick }) => {
  console.log(searchResults);
  return (
    <div className="searchResults-container">
      {searchResults.length ? (
        searchResults.map((result, index) => (
          <h2 key={index}>{result.title}</h2>
        ))
      ) : (
        <h1> Add search results here.</h1>
      )}
      {/**button to update current Offset and load more data */}
      <button onClick={handleNextPageClick}>Next Page</button>
    </div>
  );
};

export default SearchResults;

import React from "react";

const SearchResults = ({ searchResults, handleNextPageClick }) => {
  const articleLinks = searchResults.map(giveMeMyLinks);
  return (
    <div className="searchResults-container">
      Add search results here.
      <div style={{ display: "flex", flexDirection: "column" }}>
        {articleLinks}
      </div>
      <button onClick={handleNextPageClick}>Next Page</button>
    </div>
  );
};

export default SearchResults;

function giveMeMyLinks(result) {
  return (
    <a key={result.title} href={"/"}>
      {result.title}
    </a>
  );
}

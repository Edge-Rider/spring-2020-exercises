import React, { Component } from "react";

class SearchResults extends Component {
  render() {
    const { searchResults } = this.props;
    return (
      <div className="searchResults-container">
        {searchResults.map((result, index) => (
          <div key={index}>
            <h2>{result.title}</h2>
            <p>{result.pageid}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default SearchResults;

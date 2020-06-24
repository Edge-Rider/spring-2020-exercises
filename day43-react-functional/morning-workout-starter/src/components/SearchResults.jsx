import React, { Component } from "react";

const wikiBaseUrl = "https://en.wikipedia.org/wiki/";

class SearchResults extends Component {
  render() {
    const { searchResults } = this.props;
    return (
      <div className="searchResults-container">
        {searchResults.map((result, index) => (
          <h2 key={index}>
            <a
              href={`${wikiBaseUrl}${result.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {result.title}
            </a>
          </h2>
        ))}
      </div>
    );
  }
}

export default SearchResults;

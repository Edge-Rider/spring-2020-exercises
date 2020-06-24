import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'

const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch='
const pageOffsetPrefix = '&sroffset='


function App () {
  const [ searchValue, setSearchValue ] = useState('')
  const [ pageOffset, setPageOffset ] = useState(0)
  const [ searchResults, setSearchResults ] = useState([])

  const handleInputChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleSearchClick = () => {
    getSearchResults()
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') getSearchResults()
  }

  const getSearchResults = async () => {
    if(!searchValue) return
    console.log('Getting Search Results')
    const searchUrl = `${url}${searchValue}${pageOffsetPrefix}${pageOffset}`
    console.log('url', searchUrl)
    const response = await fetch(searchUrl)
    const data = await response.json()
    console.log('data', data)
    setSearchResults(data.query.search)
  }

  const handleNextPageClick = (event) => {
    setPageOffset(pageOffset + 10)
  }

  useEffect(() => {
    getSearchResults()
  }, [pageOffset]) // Empty array is thes same as componentDidMount
  return (
    <div className="App">
      <SearchBar
        searchValue={searchValue}
        handleInputChange={handleInputChange}
        handleSearchClick={handleSearchClick}
        handleKeyPress={handleKeyPress}
      />
      <SearchResults searchResults={searchResults} handleNextPageClick={handleNextPageClick}/>
  </div>
  );
}

export default App;

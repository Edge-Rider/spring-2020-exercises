import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'

const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch='

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({
      searchValue: e.target.value,
    })
  }

  handleSearchClick = () => {
    this.getSearchResults()
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') this.getSearchResults()
  }

  getSearchResults = async () => {
    console.log('getSearchResults')
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          searchValue={this.state.searchValue}
          handleInputChange={this.handleInputChange}
          handleSearchClick={this.handleSearchClick}
          handleKeyPress={this.handleKeyPress}
        />
        <SearchResults />
    </div>
    );
  }
}

export default App;

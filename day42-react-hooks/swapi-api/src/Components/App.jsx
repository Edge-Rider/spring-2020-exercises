import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch("https://swapi.dev/api/films/1")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ film: data }); // set users in state
      });
  };

  render() {
    return (
      <div className="App">
        <h1>The Star Wars API</h1>
      </div>
    );
  }
}

export default App;

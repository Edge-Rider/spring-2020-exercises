import React from "react";
import Display from "./Display.jsx";
import CounterButton from "./CounterButton.jsx";

class App extends React.Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decremenetCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <CounterButton onClick={this.decremenetCount} text="Decremenet Count" />
        <Display count={count} />
        <CounterButton onClick={this.incrementCount} text="Increment Count" />
      </div>
    );
  }
}

export default App;

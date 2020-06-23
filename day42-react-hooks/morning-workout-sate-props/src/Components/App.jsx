import React from "react";
import Display from "./Display.jsx";
import CounterButton from "./CounterButton.jsx";

class App extends React.Component {
  //goal of the exercise is to create two buttons - one should incrementCount of the display and the other should decremenetCount
  state = {
    count: 0,
  };

  //we create an arrow function that will setState to the current state + 1 -> we use arrow functions so we do not need to bind them in the constructor, arrow functions are already binded by default
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  //we create an arrow function that will setState to the current state - 1
  decremenetCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    //destructuring of the this.state object
    const { count } = this.state;
    return (
      <div className="App">
        {/**we created component named CounterButton and pass two props one is onClick function and the other is value that presents the text shown on the button */}
        <CounterButton onClick={this.decremenetCount} value="-" />
        {/**this component should just display the current state of the count, so we just pass the this.state.count as a prop */}
        <Display count={count} />
        <CounterButton onClick={this.incrementCount} value="+" />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

class CounterButton extends Component {
  render() {
    //destructuring of the this.props object
    const { onClick, value } = this.props;
    return <button onClick={onClick}>{value}</button>;
  }
}

export default CounterButton;

import React, { Component } from "react";

class CounterButton extends Component {
  render() {
    const { onClick, value } = this.props;
    return <button onClick={onClick}>{value}</button>;
  }
}

export default CounterButton;

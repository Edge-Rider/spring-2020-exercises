import React, { Component } from "react";

class CounterButton extends Component {
  render() {
    const { onClick, text } = this.props;
    return <button onClick={onClick}>{text}</button>;
  }
}

export default CounterButton;

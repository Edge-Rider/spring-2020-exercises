import React, { Component } from "react";

class Display extends Component {
  render() {
    const { count } = this.props;
    return <h2>{this.props.count}</h2>;
  }
}

export default Display;

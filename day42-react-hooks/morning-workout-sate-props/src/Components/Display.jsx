import React, { Component } from "react";

class Display extends Component {
  render() {
    //destructuring of the this.props object
    const { count } = this.props;
    return <h2>{count}</h2>;
  }
}

export default Display;

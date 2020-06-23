import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  //for each method we are console.loging name of the component and the name of the method
  constructor(props) {
    super(props);
    this.state = {
      name: "john",
    };
    console.log("LifecycleA constructor");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }
  //componentDidMount of the parent component is always ran only after all of the children components were already rendered
  componentDidMount() {
    console.log("LifecycleA componentDidMount");
    this.setState({ name: "jane" });
  }

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        LifecycleA
        <LifecycleB name={this.state.name} />
      </div>
    );
  }
}

export default LifecycleA;

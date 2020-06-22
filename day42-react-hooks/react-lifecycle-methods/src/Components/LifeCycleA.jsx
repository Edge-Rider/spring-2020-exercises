import React from "react";
import LifeCycleB from "./LifeCycleB.jsx";

class LifeCycleA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John",
    };
    console.log("LifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        LifeCycleA
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;

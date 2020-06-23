import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
    console.log("LifecycleB constructor");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(`LifecycleB prevState.name ${prevState.name}`);
    console.log(`LifecycleB nextProps.name ${nextProps.name}`);
    if (nextProps.props !== prevState.name) {
      return {
        name: nextProps.name,
      };
    }
    console.log("LifecycleB getDerivedStateFromProps");

    return null;
  }
  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }

  render() {
    console.log("LifecycleB render");
    return <div>LifecycleB</div>;
  }
}

export default LifecycleB;

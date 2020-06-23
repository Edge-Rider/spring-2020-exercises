import React, { Component } from "react";

class LifecycleB extends Component {
  //for each method we are console.loging name of the component and the name of the method
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
    console.log("LifecycleB constructor");
  }

  //in constructor we initiate the state with the props that we have passed from the parent, when the prop name changes in the parent static getDerivedStateFromProps is called and we check if the newProps equals to the nextState
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

import React from "react";
import "./App.css";
import LifecycleA from "./Components/LifecycleA";

function App() {
  //main idea behind this exercise is to demonstrate which lifecycle method of the mounting fase of the react component follows after which one so that when you are creating the component you know what to call where...fetching data should be called only in componentDidMount()
  return (
    <div className="App">
      <LifecycleA />
    </div>
  );
}

export default App;

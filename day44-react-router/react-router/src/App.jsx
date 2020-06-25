import React from "react";
import "./App.css";

import Nav from "./Nav";
import Home from "./Home";
import Users from "./Users";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/**Router is a higher order function that wraps application and lets us to change content based on the defined Routes */}

        {/**Route takes two mandatory props path and component */}
        <Switch>
          {/**Routes to render different components based on the path, need to be inside the Switch, so it renders always only one component, because otherwise Router would go through all matching paths, now it will stop at the first path that matches at least something from the browser path, you need to put the Routes in right order, so it renders right component or use word exact */}
          <Route component={Users} path="/users/:id" />
          <Route component={Users} path="/users" />

          <Route component={Home} path="/home" />
          <Route component={Home} path="/" />
        </Switch>

        <footer>Footer</footer>
      </div>
    </Router>
  );
};

export default App;

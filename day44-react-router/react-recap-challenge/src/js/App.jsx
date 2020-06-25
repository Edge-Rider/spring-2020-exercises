import React, { useEffect, useState } from "react";
import Homepage from "./pages/Hompage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App" style={{ padding: "32px" }}>
        <Switch>
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import HomeSubNav from "./HomeSubNav";
import Settings from "./Settings";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Home</h1>
      {/**Subnavigation inside home components */}
      <HomeSubNav />
      {/**Implementing swicth to change content of the homepage either take settings or main */}
      <Switch>
        <Route path="/home/settings">
          <Settings />
        </Route>
        <Main />
      </Switch>
    </div>
  );
};

const Main = () => {
  return <strong>Main</strong>;
};

export default Home;

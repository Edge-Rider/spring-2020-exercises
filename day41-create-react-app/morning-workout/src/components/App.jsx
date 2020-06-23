import React from "react";
import Header from "./Header/Index.jsx";
import Search from "./Search.jsx";
import Footer from "./Footer.jsx";
import "../style.css";
import Main from "./Main.jsx";

class App extends React.Component {
  //main goal of this exercise was to devide the big file into as small components as possible
  render() {
    return (
      <div id="page">
        <Header />
        <Search />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

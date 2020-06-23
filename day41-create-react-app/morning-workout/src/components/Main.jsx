import React from "react";
import ProductList from "./ProductList/Index.jsx";
import "../style.css";

class Main extends React.Component {
  //main goal of this exercise was to devide the big file into as small components as possible
  render() {
    return (
      <div id="main">
        <div className="content">
          <h1>Products</h1>

          <ProductList />
        </div>
      </div>
    );
  }
}

export default Main;

import React from "react";
import Header from "./Header/Index.jsx";
import Search from "./Search.jsx";
import Footer from "./Footer.jsx";
import ProductList from "./ProductList/Index.jsx";
import "../style.css";

class App extends React.Component {
  render() {
    return (
      <div id="page">
        <Header />
        <Search />
        <div id="main">
          <div className="content">
            <h1>Products</h1>

            <ProductList />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

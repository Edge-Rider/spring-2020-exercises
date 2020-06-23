import React, { Component } from "react";

class Product extends Component {
  //product component that has two props imgSrc and name
  render() {
    //destructuring the this.props object
    const { imgSrc, name } = this.props;

    return (
      <div className="product">
        <img src={imgSrc} alt={name} />
        <div className="name">{name}</div>
      </div>
    );
  }
}

export default Product;

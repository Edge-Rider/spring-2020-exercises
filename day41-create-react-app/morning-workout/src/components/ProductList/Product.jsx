import React from "react";

class Product extends React.Component {
  render() {
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

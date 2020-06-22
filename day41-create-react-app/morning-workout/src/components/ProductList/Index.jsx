import React from "react";
import Product from "./Product.jsx";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          imgSrc:
            "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/propulsion-gel.jpg",
          name: "Propulsion gel",
        },
        {
          imgSrc:
            "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/weight-cube.jpg",
          name: "Weight cube",
        },
        {
          imgSrc:
            "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/friendly-cube.jp",
          name: "A friend",
        },
        {
          imgSrc:
            "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/portal-gun.jpg",
          name: "Portal gun",
        },
        {
          imgSrc:
            "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/defense-robot.jpg",
          name: "Home-defense robot",
        },
        {
          imgSrc:
            "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/cake.jpg",
          name: "Cake (not a lie)",
        },
      ],
    };
  }
  render() {
    const { products } = this.state;
    return (
      <div className="product-list">
        {products.map((product, index) => (
          <Product name={product.name} imgSrc={product.imgSrc} key={index} />
        ))}
      </div>
    );
  }
}

export default ProductList;

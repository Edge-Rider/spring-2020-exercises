import React from "react";
import Product from "./Product.jsx";

class ProductList extends React.Component {
  //we initiate the state in constructor and create an array of products in it
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
    //destructuring the this.state object of the component
    const { products } = this.state;
    return (
      <div className="product-list">
        {/**we take our products variable that we initiated in the state and iterrate through it so we can render Product component for each of the products that we have in our array */}
        {products.map((product, index) => (
          <Product name={product.name} imgSrc={product.imgSrc} key={index} />
        ))}
      </div>
    );
  }
}

export default ProductList;

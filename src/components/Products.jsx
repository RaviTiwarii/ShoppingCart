import React, { Component } from "react";
import ItemCard from "./ItemCard";

class Products extends Component {
  render() {
    const { products, onAddToCart } = this.props;

    return (
      <div>
        <h3
          style={{
            textAlign: "center",
            backgroundColor: "grey",
            padding: "30px",
          }}
        >
          Fresh Stock
        </h3>
        {products.length > 0 &&
          products.map((product) => (
            <ItemCard
              key={product.productId}
              item={product}
              onAddToCart={onAddToCart}
            />
          ))}
      </div>
    );
  }
}

export default Products;

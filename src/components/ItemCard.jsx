import React from "react";

function ItemCard(props) {
  const { item, onAddToCart } = props;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <p>
        <strong>Gender: </strong>
        {item.gender}

        <strong>Color: </strong>
        {item.primaryColour}
      </p>
      <img src={item.searchImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.brand}</h5>
        <p className="card-text">{item.productName}</p>
        <button className="btn btn-primary" onClick={() => onAddToCart(item)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ItemCard;

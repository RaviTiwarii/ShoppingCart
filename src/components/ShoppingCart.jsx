import React, { Component } from "react";

class ShoppingCart extends Component {
  createCartItem(cartItem) {
    const { item, quantity } = cartItem;
    const totalPrice = item.price * quantity;
    return (
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={item.searchImage}
              className="img-fluid rounded-start"
              alt="Product"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.productName}</h5>
              <p className="card-text">
                <strong>Price:</strong> ${item.price}
                <br />
                <strong>Quantity: </strong>
                <button
                  onClick={() =>
                    this.props.onChangeQuantity(item, quantity - 1)
                  }
                  className="btn btn-secondary btn-sm mx-2"
                >
                  <strong>-</strong>
                </button>
                {quantity}
                <button
                  onClick={() =>
                    this.props.onChangeQuantity(item, quantity + 1)
                  }
                  className="btn btn-secondary btn-sm mx-2"
                >
                  <strong>+</strong>
                </button>
                <br />
                <strong>Total Price: </strong>${totalPrice}
              </p>
              <button
                onClick={() => this.props.onCartItemDelete(item)}
                className="btn btn-primary"
              >
                Delete
              </button>
              <br />
              <br />
              <button
                onClick={() => this.props.onAddToWishList(cartItem)}
                className="btn btn-primary"
              >
                Add To Wish List
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { cartItems } = this.props;
    return cartItems.length === 0 ? (
      <h3>Cart is empty</h3>
    ) : (
      <div>
        Shopping Cart
        {cartItems.map((cartItem) => this.createCartItem(cartItem))}
        <strong>Total: </strong>$
        {cartItems
          .map((cartItem) => cartItem.item.price * cartItem.quantity)
          .reduce((a, b) => a + b, 0)}
      </div>
    );
  }
}

export default ShoppingCart;

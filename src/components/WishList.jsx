import React, { Component } from "react";
import wishListService from "../services/wishListService";

class WishList extends Component {
  state = {
    items: wishListService.getWishList(),
  };

  onRemoveFromWishList = (wishListItem) => {
    wishListService.deleteFromWishList(wishListItem);
    this.setState({ items: wishListService.getWishList() });
  };

  onMoveItemToCart = (wishListItem) => {
    this.onRemoveFromWishList(wishListItem);
    this.props.onMoveToCart(wishListItem);
  };

  createWishListItem(wishListItem) {
    const { item } = wishListItem;
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
              </p>
              <button
                onClick={() => this.onMoveItemToCart(wishListItem)}
                className="btn btn-primary"
              >
                Move to Cart
              </button>
              <br />
              <br />
              <button
                onClick={() => this.onRemoveFromWishList(wishListItem)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { items } = this.state;
    return items.length === 0 ? (
      <h3>Wish List is empty</h3>
    ) : (
      <div>
        Wish List
        {items.map((item) => this.createWishListItem(item))}
      </div>
    );
  }
}

export default WishList;

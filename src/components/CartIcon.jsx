import React from "react";
import { Link } from "react-router-dom";

function CartIcon(props) {
  return (
    <div>
      <Link to="/cart" className="btn btn-primary">
        Cart <span className="badge bg-secondary">{props.cartSize}</span>
      </Link>
    </div>
  );
}

export default CartIcon;

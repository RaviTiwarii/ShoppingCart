import { Link, NavLink } from "react-router-dom";
import CartIcon from "./CartIcon";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <Link className="navbar-brand mx-4" to="/">
        Shopping Cart
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/products">
            Products
          </NavLink>

          <NavLink className="nav-item nav-link" to="/wishlist">
            WishList
          </NavLink>
          <CartIcon className="navbar-nav" cartSize={props.cartSize} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

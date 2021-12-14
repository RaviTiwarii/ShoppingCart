import { Link, NavLink } from "react-router-dom";
import CartIcon from "./CartIcon";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <Link className="navbar-brand" to="/">
        Shopping Cart
      </Link>
      <div className="container">
        <NavLink className="nav-item nav-link" to="/products">
          Products
        </NavLink>
        <ul className="navbar-nav">
          <CartIcon cartSize={props.cartSize} />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

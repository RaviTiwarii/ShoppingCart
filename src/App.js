import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import NotFound from "./components/NotFound";
import productService from "./services/productService";
import cartService from "./services/cartService";
import "./App.css";

class App extends Component {
  state = {
    products: [],
    cartItems: cartService.getCartItems(),
    cartSize: cartService.cartSize(),
  };

  async componentDidMount() {
    const { data } = await productService.getProducts();
    const cartSize = cartService.cartSize();
    this.setState({ products: data.products, cartSize });
  }

  handleAddToCart = (product) => {
    cartService.addToCart(product);
    this.setState({
      cartItems: cartService.getCartItems(),
      cartSize: cartService.cartSize(),
    });
  };

  handleCartItemDelete = (item) => {
    cartService.deleteFromCart(item);
    this.populateCart();
  };

  handleChangeQuantity = (item, quantity) => {
    if (quantity === 0) {
      this.handleCartItemDelete(item);
    } else {
      cartService.updateQuantity(item, quantity);
    }
    this.populateCart();
  };

  populateCart() {
    const cartItems = cartService.getCartItems();
    this.setState({ cartItems, cartSize: cartService.cartSize() });
  }

  render() {
    const { products, cartItems, cartSize } = this.state;

    return (
      <React.Fragment>
        <NavBar cartSize={cartSize} />
        <main className="container">
          <Switch>
            <Route
              path="/products"
              render={(props) => (
                <Products
                  {...props}
                  products={products}
                  onAddToCart={this.handleAddToCart}
                />
              )}
            />
            <Route
              path="/cart"
              render={(props) => (
                <ShoppingCart
                  {...props}
                  cartItems={cartItems}
                  onCartItemDelete={this.handleCartItemDelete}
                  onChangeQuantity={this.handleChangeQuantity}
                />
              )}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/products" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

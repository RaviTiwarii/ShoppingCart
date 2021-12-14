const cart = new Map();

export function addToCart(item) {
  if (cart.get(item.productId)) {
    const cartItem = cart.get(item.productId);
    cart.set(item.productId, {
      item: cartItem.item,
      quantity: cartItem.quantity + 1,
    });
  } else {
    cart.set(item.productId, {
      item: { ...item },
      quantity: 1,
    });
  }
}

export function cartSize() {
  const cartIterator = cart.values();
  console.log("CartIterator", cartIterator);
  let cartSize = 0;
  let i = 0;
  while (i < cart.size) {
    const cartItem = cartIterator.next();
    console.log("CartItem", cartItem);
    cartSize += cartItem.value.quantity;
    i++;
  }
  console.log("Cart Size", cartSize);
  return cartSize;
}

export function deleteFromCart(cartItem) {
  cart.delete(cartItem.productId);
}

export function getCartItems() {
  const cartItems = [];
  const cartIterator = cart.values();
  let i = 0;
  while (i < cart.size) {
    cartItems.push(cartIterator.next().value);
    i++;
  }
  return cartItems;
}

export function updateQuantity(item, quantity) {
  const cartItem = cart.get(item.productId);
  cartItem.quantity = quantity;
}

const cartService = {
  addToCart,
  deleteFromCart,
  cartSize,
  getCartItems,
  updateQuantity,
};

export default cartService;

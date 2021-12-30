import React from "react";

const CartContext = React.createContext({
  items: [],
  amount: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearCart: () => {},
});

export default CartContext;

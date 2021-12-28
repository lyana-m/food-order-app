import React from "react";

const CartContext = React.createContext({
  items: [],
  amount: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});

export default CartContext;

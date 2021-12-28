import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const existedItem = state.items.find((item) => item.id === action.item.id);

    let updatedItems = [];

    if (existedItem) {
      updatedItems = state.items.map((item) => {
        if (item.id === existedItem.id) {
          return { ...item, amount: item.amount + action.item.amount };
        } else {
          return item;
        }
      });
    } else {
      updatedItems = [...state.items, action.item];
    }

    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const removedItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const removedItem = state.items[removedItemIndex];

    let updatedItems = [];

    if (removedItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...removedItem, amount: removedItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[removedItemIndex] = updatedItem;
    }

    const updatedTotalAmount = state.totalAmount - removedItem.price;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartState({
      type: "ADD_ITEM",
      item: item,
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartState({
      type: "REMOVE_ITEM",
      id,
    });
  };

  const cartContext = {
    items: cartState.items,
    amount: cartState.totalAmount,
    addItemToCart: addItemToCartHandler,
    removeItemFromCart: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

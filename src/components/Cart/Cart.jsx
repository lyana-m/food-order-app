import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import cl from "./Cart.module.css";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);

  const cartCtx = useContext(CartContext);

  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    console.log(item);
    cartCtx.addItemToCart({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    console.log(id);
    cartCtx.removeItemFromCart(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const cartItems = (
    <ul className={cl["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          amount={item.amount}
          name={item.name}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onBackDropClick={props.onHideCart}>
      {cartItems}
      <div className={cl.total}>
        <span>Total Amount</span>
        <span>${cartCtx.amount.toFixed(2)}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.onHideCart} />}
      {!isCheckout && (
        <div className={cl.actions}>
          <button className={cl["button--alt"]} onClick={props.onHideCart}>
            Close
          </button>
          {hasItems && (
            <button className={cl.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;

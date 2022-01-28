import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import cl from "./Cart.module.css";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

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

  const submitOrderHamdler = async (userData) => {
    setIsSubmitting(true);
    try {
      await fetch(
        "https://react-max-fa58c-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
        {
          method: "POST",

          body: JSON.stringify({
            user: userData,
            orderItems: cartCtx.items,
          }),
        }
      );
      setDidSubmit(true);
      cartCtx.clearCart();
    } catch (error) {
      setDidSubmit(true);
    } finally {
      setIsSubmitting(false);
    }
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

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={cl.total}>
        <span>Total Amount</span>
        <span>${cartCtx.amount.toFixed(2)}</span>
      </div>
      {isCheckout && (
        <Checkout onCancel={props.onHideCart} onSubmit={submitOrderHamdler} />
      )}
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
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>The order is sending...</p>;

  const successfullySubmitModalContent = (
    <React.Fragment>
      <p>The order has been successfully sent!</p>
      <div className={cl.actions}>
        <button className={cl["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onBackDropClick={props.onHideCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && successfullySubmitModalContent}
    </Modal>
  );
};

export default Cart;

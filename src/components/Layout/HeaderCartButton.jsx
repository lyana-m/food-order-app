import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [isBtnHighkited, setIsBtnHighkited] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmountOfItems = cartCtx.items.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  const btnClasses = `${classes.button} ${isBtnHighkited ? classes.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setIsBtnHighkited(true);
    const timer = setTimeout(() => {
      setIsBtnHighkited(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{totalAmountOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;

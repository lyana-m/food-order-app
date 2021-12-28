import { useRef, useState } from "react";

import Input from "../../UI/Input";

import cl from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountRef = useRef();
  const [isFormValid, setIsFormValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const amountValue = amountRef.current.value;
    const amount = +amountValue;

    if (amountValue.trim().length === 0 || amount < 1 || amount > 5) {
      setIsFormValid(false);
      return;
    }

    props.onAddToCart(amount);
    setIsFormValid(true);
  };

  return (
    <form className={cl.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!isFormValid && <p>Please, enter correct amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;

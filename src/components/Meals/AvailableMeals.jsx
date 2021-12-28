import { useState, useEffect } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    setError("");
    try {
      const response = await fetch(
        "https://react-max-fa58c-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong...");
      }

      const data = await response.json();
      const modifiedData = [];

      for (let id of Object.keys(data)) {
        modifiedData.push({ id, ...data[id] });
      }

      setMeals(modifiedData);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  if (error) {
    return (
      <section className={classes.mealsLoading}>
        <p>Something went wrong...</p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Meals are loading...</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
      id={meal.id}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

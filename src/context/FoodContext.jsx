import { createContext, useCallback, useEffect, useState } from "react";
import { callApi } from "../components/index";

export const FoodContext = createContext();

export const FoodContextProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);
  const [foodMenu, setFoodMenu] = useState([]);
  const [units, setUnits] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);

  const fetchIngredients = async () => {
    const res = await callApi("GET", "/setting/ingredient/list");
    setIngredients(res);
  };

  const fetchFoodMenu = async () => {
    const res = await callApi("GET", "/setting/foodMenu/list");
    setFoodMenu(res);
  };

  const fetchFoodCategories = async () => {
    const res = await callApi("GET", "/setting/foodCategory/list");
    setFoodCategories(res);
    // console.log("food cats", res);
  };

  const fetchUnits = async () => {
    const res = await callApi("GET", "/setting/ingredientUnit/list");
    setUnits(res);
  };

  // useCallback(() => {
  //   fetchIngredients();
  // }, [ingredients]);

  // useCallback(() => {
  //   fetchFoodMenu();
  // }, [foodMenu]);

  // useCallback(() => {
  //   fetchFoodCategories();
  // }, [foodCategories]);

  // useCallback(() => {
  //   fetchUnits();
  // }, []);

  // useEffect(() => {
  //   fetchIngredients();
  //   fetchFoodCategories();
  //   fetchFoodMenu();
  //   fetchUnits();
  // }, []);

  return (
    <FoodContext.Provider
      value={{
        ingredients,
        foodMenu,
        units,
        foodCategories,
        fetchIngredients,
        fetchFoodMenu,
        fetchFoodCategories,
        fetchUnits,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

import React, { useContext, useEffect, useState } from "react";

import {
  SettingsInput,
  Settings_Button,
  SettingsSelect,
  Main_Layout,
} from "../../../components/index.js";
import { FoodContext } from "../../../context/FoodContext.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../../redux/Items/Ingredients/Ingredients.action.js";
import { getFoodMenuCategory } from "../../../redux/Items/FoodMenuCategory/FoodMenuCategory.actions.js";
import { getIngredientUnits } from "../../../redux/Items/IngredientsUnit/IngredientsUnit.action.js";

const Content = () => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.premadefood);
  const { FoodMenuCategoryData } = useSelector(
    (state) => state.FoodMenuCategory
  );
  const { IngredientsData } = useSelector((state) => state.Ingredient);
  const { IngredientUnitsData } = useSelector((state) => state.IngredientsUnit);

  // const {
  //   foodCategories,
  //   ingredients,
  //   units,
  //   fetchFoodCategories,
  //   fetchIngredients,
  //   fetchUnits,
  // } = useContext(FoodContext);

  // STATE FOR INPUT VALUES
  const [inputValues, setInputValues] = useState("");

  const [categoryOptions, setCategoryOptions] = useState([]);
  const [ingredientOptions, setIngredientOptions] = useState([]);
  const [unitOptions, setUnitOptions] = useState([]);

  useEffect(() => {
    // fetchFoodCategories();
    // fetchIngredients();
    // fetchUnits();
    dispatch(getFoodMenuCategory());
    dispatch(getIngredients());
    dispatch(getIngredientUnits());
    // dispatch(GetFoodMenu())
  }, []);

  useEffect(() => {
    if (FoodMenuCategoryData?.foodCategory) {
      const categoryOptions = FoodMenuCategoryData?.foodCategory?.map(
        (item) => ({
          value: item._id,
          label: item.name,
        })
      );
      setCategoryOptions(categoryOptions);
    }
  }, [FoodMenuCategoryData]);

  useEffect(() => {
    if (IngredientsData?.ingredient) {
      const ingredientOptions = IngredientsData?.ingredient?.map((item) => ({
        value: item._id,
        label: item.name,
      }));
      setIngredientOptions(ingredientOptions);
    }
  }, [IngredientsData]);

  useEffect(() => {
    if (IngredientUnitsData) {
      const unitOptions = IngredientUnitsData?.ingredientUnit?.map((item) => ({
        value: item._id,
        label: item.ingredientUnit_name,
      }));
      setUnitOptions(unitOptions);
    }
  }, [IngredientUnitsData]);

  const handleInputValues = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    console.log("inputValues", inputValues);
  };

  return (
    <>
      <form className="p-3">
        {/* UPPER INPUTS */}
        <div className="row">
          <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
            <SettingsInput
              inputId="name"
              labelFor="name"
              labelText="Name"
              name="name"
              type="text"
              placeholder="Name"
              required
              onChange={handleInputValues}
            />
          </div>

          <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
            <SettingsInput
              inputId="code"
              labelFor="Code"
              labelText="Code"
              name="name"
              type="text"
              placeholder="Code"
              required
              onChange={handleInputValues}
            />
          </div>

          <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
            <SettingsSelect
              labelFor="category"
              selectId="category"
              labelText="Category"
              required
              options={categoryOptions}
            />
          </div>

          <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
            <SettingsSelect
              labelFor="ingredientConsumption"
              selectId="ingredientConsumption"
              labelText="Ingredient Cosumption"
              required
              options={ingredientOptions}
            />
          </div>
        </div>

        {/* TABLE ROW */}
        <div className="row">
          <table></table>
        </div>

        {/* TABLE ROW */}
        <div className="row my-3">
          <table className="table w-100">
            <thead>
              <tr>
                <th>SN</th>
                <th>Ingredient</th>
                <th>Consumption</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>

        {/* CONSUMPTION ROWS */}
        <div className="mb-2 row">
          <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
            <SettingsSelect
              labelFor="unit"
              selectId="unit"
              labelText="Consumption Unit"
              required
              tooltip
              options={unitOptions}
            />
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4">
            <SettingsInput
              inputId="costUnit"
              labelFor="costUnit"
              labelText="Cost Per Unit"
              name="costUnit"
              placeholder="Cost Per Unit"
              type="number"
              required
              tooltip
              onChange={handleInputValues}
            />
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4">
            <SettingsInput
              inputId="quantity"
              labelFor="quantity"
              labelText="Low Quantity"
              name="quantity"
              placeholder="Low Qty"
              type="number"
              required
              tooltip
              onChange={handleInputValues}
            />
          </div>
        </div>

        {/* BUTTON */}
        <div className="row">
          <div className="col-sm-12 col-md-2 col-lg-2">
            <Settings_Button btnTxt="Submit" type="submit" />
          </div>
        </div>
      </form>
    </>
  );
};

const Add_PreMade_Food = () => {
  return <Main_Layout Content={Content} heading="Add Pre-Made Food" />;
};

export default Add_PreMade_Food;

import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
  compose,
} from "redux";
import thunk from "redux-thunk";

import { tableListReducer } from "./table/table.reducer";
import { addAreaReducer } from "./AddArea/addArea.reducer";
 import { IngredientUnitReducer } from "./Items/IngredientsUnit/IngredientsUnit.reducer";
import { IngredientReducer } from "./Items/Ingredients/Ingredients.reducer";
import { FoodMenuReducer } from "./Items/FoodMenu/FoodMenu.reducer";
import { premadefoodReducer } from "./Items/PreMadeFood/PreMadeFood.reducer";
import { modifierReducer } from "./Items/Modifier/Modifier.reducer";
import { IngredientcategoryReducer } from "./Items/IngredientsCategory/IngredientsCategory.reducer";
 
const rootReducer = combineReducers({
  table: tableListReducer,
  addArea: addAreaReducer,
  foodMenu: FoodMenuReducer,
  IngredientsUnit: IngredientUnitReducer,
  Ingredient:IngredientReducer,
  premadefood:premadefoodReducer,
  modifier:modifierReducer,
  Ingredientcategory:IngredientcategoryReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

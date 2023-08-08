import { toast } from "react-toastify";
import {
  GET_INGREDIENTCATEGORY_LOADING,
  GET_INGREDIENTCATEGORY_SUCCESS,
  GET_INGREDIENTCATEGORY_ERROR,
  ADD_INGREDIENTCATEGORY_ERROR,
  ADD_INGREDIENTCATEGORY_SUCCESS,
  ADD_INGREDIENTCATEGORY_LOADING,
  UPDATE_INGREDIENTCATEGORY_LOADING,
  UPDATE_INGREDIENTCATEGORY_SUCCESS,
  UPDATE_INGREDIENTCATEGORY_ERROR,
  DELETE_INGREDIENTCATEGORY_LOADING,
  DELETE_INGREDIENTCATEGORY_ERROR,
  DELETE_INGREDIENTCATEGORY_SUCCESS,
} from "./IngredientsCategory.actionType.js";

import axios from "axios";
import { baseURL } from "../../../api/apiConfig.js";
import { ingredientCategoryEndpoints } from "../../../api/api_endpoints/itemsEndpoints.js";

export const getIngredientCategories = () => async (dispatch) => {
  dispatch({ type: GET_INGREDIENTCATEGORY_LOADING });
  try {
    let res = await axios.get(baseURL+ingredientCategoryEndpoints.getAllIngredientCategories);
    console.log("res", res);
    if (res.data) {
      dispatch({ type: GET_INGREDIENTCATEGORY_SUCCESS, payload: res.data });
    }
  } catch (error) {
    dispatch({ type: GET_INGREDIENTCATEGORY_ERROR, payload: error.message });
  }
};


export const addIngredientcategory = (newData) => async (dispatch) => {
  dispatch({ type: ADD_INGREDIENTCATEGORY_LOADING });
  try {
    let res = await axios.post(
      baseURL + ingredientCategoryEndpoints.addIngredientCategory,
      newData
    );
    console.log("res", res);
    if (res.data) {
      dispatch({ type: ADD_INGREDIENTCATEGORY_SUCCESS, payload: res.data });
      toast.success("Ingredient Category added successfully");
    }
  } catch (error) {
    dispatch({
      type: ADD_INGREDIENTCATEGORY_ERROR,
      payload: error.message,
    });
    toast.error("Failed to add Ingredient Category");
  }
};

export const deleteAreaData = (id) => async (dispatch) => {
  dispatch({ type: DELETE_INGREDIENTCATEGORY_LOADING });
  try {
    let res = await axios.delete(
      baseURL + ingredientCategoryEndpoints.deleteIngredientCategory(id)
    );
    console.log("res", res);
    if (res.data) {
      dispatch({
        type: DELETE_INGREDIENTCATEGORY_SUCCESS,
        payload: res.data,
      });
      toast.success("Ingredient Category Delete successfully");
    }
  } catch (error) {
    dispatch({
      type: DELETE_INGREDIENTCATEGORY_ERROR,
      payload: error.message,
    });
    toast.error("Failed to Delete Ingredient Category");
  }
};

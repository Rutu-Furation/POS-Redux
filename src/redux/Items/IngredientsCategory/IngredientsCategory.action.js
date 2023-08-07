import { toast } from "react-toastify";
import {
  ADD_INGREDIENTCATEGORY_ERROR,
  ADD_INGREDIENTCATEGORY_SUCCESS,
  ADD_INGREDIENTCATEGORY_LOADING,
  DELETE_INGREDIENTCATEGORY_LOADING,
  DELETE_INGREDIENTCATEGORY_ERROR,
  DELETE_INGREDIENTCATEGORY_SUCCESS,
} from "./IngredientsCategory.actionType.js";

import axios from "axios";

const baseURL = "https://famous-bear-kimono.cyclic.app";

export const addIngredientcategory = (newData) => async (dispatch) => {
  dispatch({ type: ADD_INGREDIENTCATEGORY_LOADING });
  try {
    let res = await axios.post(
      `${baseURL}/setting/ingredientcategory/new`,
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
      `${baseURL}/setting/ingredientunit/delete/${id}`
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

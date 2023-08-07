import { toast } from "react-toastify";
import {
  ADD_INGREDIENT_ERROR,
  ADD_INGREDIENT_SUCCESS,
  ADD_INGREDIENT_LOADING,
  DELETE_INGREDIENT_LOADING,
  DELETE_INGREDIENT_ERROR,
  DELETE_INGREDIENT_SUCCESS,
} from "./IngredientsUnit.actionType.js";

import axios from "axios";

const baseURL = "https://famous-bear-kimono.cyclic.app";

export const addIngredient = (newData) => async (dispatch) => {
  dispatch({ type: ADD_INGREDIENT_LOADING });
  try {
    let res = await axios.post(
      `${baseURL}/setting/ingredient/new`,
      newData
    );
    console.log("res", res);
    if (res.data) {
      dispatch({ type: ADD_INGREDIENT_SUCCESS, payload: res.data });
      toast.success("Ingredient   added successfully");
    }
  } catch (error) {
    dispatch({ type: ADD_INGREDIENT_ERROR, payload: error.message });
    toast.error("Failed to add Ingredient  ");
  }
};

export const deleteAreaData = (id) => async (dispatch) => {
  dispatch({ type: DELETE_INGREDIENT_LOADING });
  try {
    let res = await axios.delete(
      `${baseURL}/setting/ingredient/delete/${id}`
    );
    console.log("res", res);
    if (res.data) {
      dispatch({ type: DELETE_INGREDIENT_SUCCESS, payload: res.data });
      toast.success("Ingredient   Delete successfully");
    }
  } catch (error) {
    dispatch({ type: DELETE_INGREDIENT_ERROR, payload: error.message });
    toast.error("Failed to Delete Ingredient  ");
  }
};

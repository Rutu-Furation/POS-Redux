import { toast } from "react-toastify";
import {
  GET_INGREDIENT_LOADING,
  GET_INGREDIENT_ERROR,
  GET_INGREDIENT_SUCCESS,
  ADD_INGREDIENT_ERROR,
  ADD_INGREDIENT_SUCCESS,
  ADD_INGREDIENT_LOADING,
  DELETE_INGREDIENT_LOADING,
  DELETE_INGREDIENT_ERROR,
  DELETE_INGREDIENT_SUCCESS,
  UPDATE_INGREDIENT_LOADING,
  UPDATE_INGREDIENT_ERROR,
  UPDATE_INGREDIENT_SUCCESS,
} from "./Ingredients.actionType";

import axios from "axios";
import { baseURL } from "../../../api/apiConfig";
import { ingredientsEndpoints } from "../../../api/api_endpoints/itemsEndpoints";




export const getIngredients = () => async (dispatch) => {
  dispatch({ type: GET_INGREDIENT_LOADING });
  try {
    let res = await axios.get(baseURL+ingredientsEndpoints.getAllIngredients);
    console.log("res", res);
    if (res.data) {
      dispatch({ type: GET_INGREDIENT_SUCCESS, payload: res.data });
    }
  } catch (error) {
    dispatch({ type: GET_INGREDIENT_ERROR, payload: error.message });
  }
};



export const addIngredient = (newData) => async (dispatch) => {

  dispatch({ type: ADD_INGREDIENT_LOADING });
  try {
    let res = await axios.post(
      baseURL + ingredientsEndpoints.addIngredient,
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
      baseURL + ingredientsEndpoints.deleteIngredient(id)
    );
    console.log("res", res);
    if (res.data) {
      dispatch({ type: DELETE_INGREDIENT_SUCCESS, payload: res.data });
      toast.success("Ingredient Delete successfully");
    }
  } catch (error) {
    dispatch({ type: DELETE_INGREDIENT_ERROR, payload: error.message });
    toast.error("Failed to Delete Ingredient  ");
  }
};

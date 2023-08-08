import { toast } from "react-toastify";
import {
  GET_INGREDIENTUNIT_LOADING,
  GET_INGREDIENTUNIT_SUCCESS,
  GET_INGREDIENTUNIT_ERROR,
  ADD_INGREDIENTUNIT_ERROR,
  ADD_INGREDIENTUNIT_SUCCESS,
  ADD_INGREDIENTUNIT_LOADING,
  UPDATE_INGREDIENTUNIT_LOADING,
  UPDATE_INGREDIENTUNIT_SUCCESS,
  UPDATE_INGREDIENTUNIT_ERROR,
  DELETE_INGREDIENTUNIT_LOADING,
  DELETE_INGREDIENTUNIT_ERROR,
  DELETE_INGREDIENTUNIT_SUCCESS,
} from "./IngredientsUnit.actionType.js";

import axios from "axios";
import { baseURL } from "../../../api/apiConfig.js";
import { ingredientUnitsEndpoints } from "../../../api/api_endpoints/itemsEndpoints.js";


export const getIngredientUnits = () => async (dispatch) => {
  dispatch({ type: GET_INGREDIENTUNIT_LOADING });
  try {
    let res = await axios.get(baseURL+ingredientUnitsEndpoints.getAllIngredientUnits);
    console.log("res", res);
    if (res.data) {
      dispatch({ type: GET_INGREDIENTUNIT_SUCCESS, payload: res.data });
    }
  } catch (error) {
    dispatch({ type: GET_INGREDIENTUNIT_ERROR, payload: error.message });
  }
};


export const addIngredientUnit = (newData) => async (dispatch) => {
  dispatch({ type: ADD_INGREDIENTUNIT_LOADING });
  try {
    let res = await axios.post(
      baseURL + ingredientUnitsEndpoints.addIngredientUnit,
      newData
    );
    console.log("res", res);
    if (res.data) {
      dispatch({ type: ADD_INGREDIENTUNIT_SUCCESS, payload: res.data });
      toast.success("Ingredient Unit added successfully");
    }
  } catch (error) {
    dispatch({ type: ADD_INGREDIENTUNIT_ERROR, payload: error.message });
    toast.error("Failed to add Ingredient Unit");
  }
};

export const deleteAreaData = (id) => async (dispatch) => {
  dispatch({ type: DELETE_INGREDIENTUNIT_LOADING });
  try {
    let res = await axios.delete(
      baseURL + ingredientUnitsEndpoints.deleteIngredientUnit(id)
    );
    console.log("res", res);
    if (res.data) {
      dispatch({ type: DELETE_INGREDIENTUNIT_SUCCESS, payload: res.data });
      toast.success("Ingredient Unit Delete successfully");
    }
  } catch (error) {
    dispatch({ type: DELETE_INGREDIENTUNIT_ERROR, payload: error.message });
    toast.error("Failed to Delete Ingredient Unit");
  }
};

import { toast } from "react-toastify";
import {
  ADD_FOODMENUCATEGORY_ERROR,
  ADD_FOODMENUCATEGORY_SUCCESS,
  ADD_FOODMENUCATEGORY_LOADING,
  DELETE_FOODMENUCATEGORY_LOADING,
  DELETE_FOODMENUCATEGORY_ERROR,
  DELETE_FOODMENUCATEGORY_SUCCESS,
  UPDATE_FOODMENUCATEGORY_ERROR,
  UPDATE_FOODMENUCATEGORY_SUCCESS,
  UPDATE_FOODMENUCATEGORY_LOADING,
  GET_FOODMENUCATEGORY_LOADING,
  GET_FOODMENUCATEGORY_ERROR,
  GET_FOODMENUCATEGORY_SUCCESS,
} from "./FoodMenuCategory.actionTypes.js";

import axios from "axios";
import { baseURL } from "../../../api/apiConfig";
import {
  FoodMenuCategoryEndpoints,
  regularFoodMenuEndpoints,
} from "../../../api/api_endpoints/itemsEndpoints";

export const getFoodMenuCategory = () => async (dispatch) => {
  dispatch({ type: GET_FOODMENUCATEGORY_LOADING });
  try {
    let res = await axios.get(
      baseURL + FoodMenuCategoryEndpoints.getFoodMenuCategory
    );
    console.log("res", res);
    if (res) {
      dispatch({ type: GET_FOODMENUCATEGORY_SUCCESS, payload: res.data });
    }
  } catch (error) {
    dispatch({ type: GET_FOODMENUCATEGORY_ERROR, payload: error.message });
  }
};

export const addFoodMenuCategory = (newData) => async (dispatch) => {
  dispatch({ type: ADD_FOODMENUCATEGORY_LOADING });
  try {
    let res = await axios.post(
      baseURL + FoodMenuCategoryEndpoints.addFoodMenuCategory,
      newData
    );
    console.log("res", res);
    if (res) {
      dispatch({ type: ADD_FOODMENUCATEGORY_SUCCESS, payload: res.data });
      toast.success("Food Menu Category added successfully");
    }
  } catch (error) {
    dispatch({ type: ADD_FOODMENUCATEGORY_ERROR, payload: error.message });
    toast.error("Failed to add Food Menu Category");
  }
};

export const deleteFoodMenuCategoryData = (id) => async (dispatch) => {
  dispatch({ type: DELETE_FOODMENUCATEGORY_LOADING });
  try {
    let res = await axios.delete(
      baseURL + FoodMenuCategoryEndpoints.deleteFoodMenuCategory(id)
    );
    console.log("res", res);
    if (res.data) {
      dispatch({ type: DELETE_FOODMENUCATEGORY_SUCCESS, payload: res.data });
      toast.success("Food MenuCategory delete successfully");
    }
  } catch (error) {
    dispatch({ type: DELETE_FOODMENUCATEGORY_ERROR, payload: error.message });
    toast.error("Failed to delete Food MenuCategory");
  }
};
export const updateFoodMenu =
  ({ id, newData }) =>
  async (dispatch) => {
    dispatch({ type: UPDATE_FOODMENUCATEGORY_LOADING });
    try {
      let res = await axios.update(
        `${baseURL}/setting/foodMenu/${id}`,
        newData
      );
      console.log("res", res);
      if (res.data) {
        dispatch({ type: UPDATE_FOODMENUCATEGORY_SUCCESS, payload: res.data });
        toast.success("Food Menu updated successfully");
      }
    } catch (error) {
      dispatch({ type: UPDATE_FOODMENUCATEGORY_ERROR, payload: error.message });
      toast.error("Failed to update Food Menu");
    }
  };

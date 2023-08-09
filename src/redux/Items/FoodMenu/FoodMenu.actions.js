import { toast } from "react-toastify";
import {
  ADD_FOODMENU_ERROR,
  ADD_FOODMENU_SUCCESS,
  ADD_FOODMENU_LOADING,
  DELETE_FOODMENU_LOADING,
  DELETE_FOODMENU_ERROR,
  DELETE_FOODMENU_SUCCESS,
  UPDATE_FOODMENU_ERROR,
  UPDATE_FOODMENU_SUCCESS,
  UPDATE_FOODMENU_LOADING,
  GET_FOODMENU_LOADING,
  GET_FOODMENU_ERROR,
  GET_FOODMENU_SUCCESS,
} from "./FoodMenu.actionTypes";

import axios from "axios";
import { baseURL } from "../../../api/apiConfig";
import { regularFoodMenuEndpoints } from "../../../api/api_endpoints/itemsEndpoints";

export const GetFoodMenu = () => async (dispatch) => {
  dispatch({ type: GET_FOODMENU_LOADING });
  try {
    let res = await axios.get(
      baseURL + regularFoodMenuEndpoints.getRegularFoodMenu
    );
    console.log("res", res);
    if (res) {
      dispatch({ type: GET_FOODMENU_SUCCESS, payload: res });
    }
  } catch (error) {
    dispatch({ type: GET_FOODMENU_ERROR, payload: error.message });
  }
};

export const AddFoodMenu = (newData) => async (dispatch) => {
  dispatch({ type: ADD_FOODMENU_LOADING });
  try {
    let res = await axios.post(
      baseURL + regularFoodMenuEndpoints.addRegularFoodMenu,
      newData
    );
    console.log("res", res);
    if (res.data) {
      dispatch({ type: ADD_FOODMENU_SUCCESS, payload: res.data });
      toast.success("Food Menu added successfully");
    }
  } catch (error) {
    dispatch({ type: ADD_FOODMENU_ERROR, payload: error.message });
    toast.error("Failed to add Food Menu");
  }
};

export const deleteFoodMenuData = (id) => async (dispatch) => {
  dispatch({ type: DELETE_FOODMENU_LOADING });
  try {
    let res = await axios.delete(
      baseURL + regularFoodMenuEndpoints.deleteRegularFoodMeny(id)
    );
    console.log("res", res);
    if (res.data) {
      dispatch({ type: DELETE_FOODMENU_SUCCESS, payload: res.data });
      toast.success("Food Menu delete successfully");
    }
  } catch (error) {
    dispatch({ type: DELETE_FOODMENU_ERROR, payload: error.message });
    toast.error("Failed to delete Food Menu");
  }
};
export const updateFoodMenu =
  ({ id, newData }) =>
  async (dispatch) => {
    dispatch({ type: UPDATE_FOODMENU_LOADING });
    try {
      let res = await axios.update(
        `${baseURL}/setting/foodMenu/${id}`,
        newData
      );
      console.log("res", res);
      if (res.data) {
        dispatch({ type: UPDATE_FOODMENU_SUCCESS, payload: res.data });
        toast.success("Food Menu updated successfully");
      }
    } catch (error) {
      dispatch({ type: UPDATE_FOODMENU_ERROR, payload: error.message });
      toast.error("Failed to update Food Menu");
    }
  };

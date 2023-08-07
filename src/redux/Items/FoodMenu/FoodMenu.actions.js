import { toast } from "react-toastify";
import {
  ADD_FOODMENU_ERROR,
  ADD_FOODMENU_SUCCESS,
  ADD_FOODMENU_LOADING,
  DELETE_FOODMENU_LOADING,
  DELETE_FOODMENU_ERROR,
  DELETE_FOODMENU_SUCCESS,
} from "./FoodMenu.actionTypes";

import axios from "axios";

const baseURL = "https://famous-bear-kimono.cyclic.app";

export const AddFoodMenu = (newData) => async (dispatch) => {
  dispatch({ type: ADD_FOODMENU_LOADING });
  try {
    let res = await axios.post(`${baseURL}/setting/foodMenu/new`, newData);
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

export const deleteAreaData = (id) => async (dispatch) => {
  dispatch({ type: DELETE_FOODMENU_LOADING });
  try {
    let res = await axios.delete(`${baseURL}/setting/foodMenu/delete/${id}`);
    console.log("res", res);
    if (res.data) {
      dispatch({ type: DELETE_FOODMENU_SUCCESS, payload: res.data });
      toast.success("Food Menu added successfully");
    }
  } catch (error) {
    dispatch({ type: DELETE_FOODMENU_ERROR, payload: error.message });
    toast.error("Failed to add Food Menu");
  }
};

import { toast } from "react-toastify";
import {
  GET_PREMADEFOOD_LOADING,
  GET_PREMADEFOOD_SUCCESS,
  GET_PREMADEFOOD_ERROR,
  ADD_PREMADEFOOD_ERROR,
  ADD_PREMADEFOOD_SUCCESS,
  ADD_PREMADEFOOD_LOADING,
  UPDATE_PREMADEFOOD_LOADING,
  UPDATE_PREMADEFOOD_SUCCESS,
  UPDATE_PREMADEFOOD_ERROR,
  DELETE_PREMADEFOOD_LOADING,
  DELETE_PREMADEFOOD_ERROR,
  DELETE_PREMADEFOOD_SUCCESS,
} from "./PreMadeFood.actionType.js";

import axios from "axios";
import { baseURL } from "../../../api/apiConfig.js";
import { preMadeFoodEndpoints } from "../../../api/api_endpoints/itemsEndpoints.js";


export const getPreMadeFood = () => async (dispatch) => {
  dispatch({ type: GET_PREMADEFOOD_LOADING });
  try {
    let res = await axios.get(baseURL+preMadeFoodEndpoints.getAllPreMadeFood);
    console.log("res", res);
    if (res.data) {
      dispatch({ type: GET_PREMADEFOOD_SUCCESS, payload: res.data });
    }
  } catch (error) {
    dispatch({ type: GET_PREMADEFOOD_ERROR, payload: error.message });
  }
};


export const addpremadefood = (newData) => async (dispatch) => {
  dispatch({ type: ADD_PREMADEFOOD_LOADING });
  try {
    let res = await axios.post(baseURL+preMadeFoodEndpoints.addPreMadeFood, newData);
    console.log("res", res);
    if (res.data) {
      dispatch({ type: ADD_PREMADEFOOD_SUCCESS, payload: res.data });
      toast.success("PreMade Food added successfully");
    }
  } catch (error) {
    dispatch({ type: ADD_PREMADEFOOD_ERROR, payload: error.message });
    toast.error("Failed to add  PreMade Food");
  }
};

export const deletepremadefood = (id) => async (dispatch) => {
  dispatch({ type: DELETE_PREMADEFOOD_LOADING });
  try {
    let res = await axios.delete(baseURL+preMadeFoodEndpoints.deletePreMadeFood(id));
    console.log("res", res);
    if (res.data) {
      dispatch({ type: DELETE_PREMADEFOOD_SUCCESS, payload: res.data });
      toast.success("PreMade Food Delete successfully");
    }
  } catch (error) {
    dispatch({ type: DELETE_PREMADEFOOD_ERROR, payload: error.message });
    toast.error("Failed to Delete PreMade Food");
  }
};

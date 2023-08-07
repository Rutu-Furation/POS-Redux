import { toast } from "react-toastify";
import {
  ADD_PREMADEFOOD_ERROR,
  ADD_PREMADEFOOD_SUCCESS,
  ADD_PREMADEFOOD_LOADING,
  DELETE_PREMADEFOOD_LOADING,
  DELETE_PREMADEFOOD_ERROR,
  DELETE_PREMADEFOOD_SUCCESS,
} from "./PreMadeFood.actionType.js";

import axios from "axios";

const baseURL = "https://famous-bear-kimono.cyclic.app";

export const addpremadefood = (newData) => async (dispatch) => {
  dispatch({ type: ADD_PREMADEFOOD_LOADING });
  try {
    let res = await axios.post(`${baseURL}/setting/premade/new`, newData);
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
    let res = await axios.delete(`${baseURL}/setting/premadefood/delete/${id}`);
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
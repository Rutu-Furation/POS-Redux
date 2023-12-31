import { toast } from "react-toastify";
import {
  GET_MODIFIER_LOADING,
  GET_MODIFIER_SUCCESS,
  GET_MODIFIER_ERROR,
  ADD_MODIFIER_ERROR,
  ADD_MODIFIER_SUCCESS,
  ADD_MODIFIER_LOADING,
  UPDATE_MODIFIER_LOADING,
  UPDATE_MODIFIER_SUCCESS,
  UPDATE_MODIFIER_ERROR,
  DELETE_MODIFIER_LOADING,
  DELETE_MODIFIER_ERROR,
  DELETE_MODIFIER_SUCCESS,
} from "./Modifier.actionType.js";

import axios from "axios";
import { baseURL } from "../../../api/apiConfig.js";
import { modifiersEndpoints } from "../../../api/api_endpoints/itemsEndpoints.js";

export const addmodifier = (newData) => async (dispatch) => {
  dispatch({ type: ADD_MODIFIER_LOADING });
  try {
    let res = await axios.post(
      baseURL + modifiersEndpoints.addModifier,
      newData
    );
    console.log("res", res);
    if (res) {
      dispatch({ type: ADD_MODIFIER_SUCCESS, payload: res.data });
      toast.success("Modifier added successfully");
    }
  } catch (error) {
    dispatch({ type: ADD_MODIFIER_ERROR, payload: error.message });
    toast.error("Failed to add  Modifier");
  }
};

export const deletemodifier = (id) => async (dispatch) => {
  dispatch({ type: DELETE_MODIFIER_LOADING });
  try {
    // let res = await axios.delete(`${baseURL}/setting/modifier/delete/${id}`);
    let res = await axios.delete(
      baseURL + modifiersEndpoints.deleteModifier(id)
    );
    console.log("res", res);
    if (res.data) {
      dispatch({ type: DELETE_MODIFIER_SUCCESS, payload: res.data });
      toast.success("Modifier Delete successfully");
    }
  } catch (error) {
    dispatch({ type: DELETE_MODIFIER_ERROR, payload: error.message });
    toast.error("Failed to Delete Modifier");
  }
};

export const getmodifier = () => async (dispatch) => {
  dispatch({ type: GET_MODIFIER_LOADING });
  try {
    let res = await axios.get(baseURL + modifiersEndpoints.getAllModifiers);
    console.log("res", res);
    if (res.data) {
      dispatch({ type: GET_MODIFIER_SUCCESS, payload: res.data });
    }
  } catch (error) {
    dispatch({ type: GET_MODIFIER_ERROR, payload: error.message });
  }
};

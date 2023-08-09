import { toast } from "react-toastify";
import {
  ADD_AREA_ERROR,
  ADD_AREA_SUCCESS,
  ADD_AREA_LOADING,
  DELETE_AREA_SUCCESS,
  DELETE_AREA_LOADING,
  DELETE_AREA_ERROR,
  GET_AREA_SUCCESS,
  GET_AREA_LOADING,
  GET_AREA_ERROR,
  UPDATE_AREA_SUCCESS,
  UPDATE_AREA_LOADING,
  UPDATE_AREA_ERROR,
} from "./addArea.actionType";
import axios from "axios";
import { areaEndpoints } from "../../../api/api_endpoints/settingsEndpoints";
import { baseURL } from "../../../api/apiConfig";

export const getAreaData = () => async (dispatch) => {
  dispatch({ type: GET_AREA_LOADING });
  try {
    let res = await axios.get(baseURL+areaEndpoints.getAllAreas);
    console.log("res", res);
    if (res) {
      dispatch({ type: GET_AREA_SUCCESS, payload: res.data });
    }
  } catch (error) {
    dispatch({ type: GET_AREA_ERROR, payload: error.message });
  }
};

export const addAreaData = (newData) => async (dispatch) => {
  dispatch({ type: ADD_AREA_LOADING });
  try {
    console.log("newData", newData);

    let res = await axios.post(baseURL+areaEndpoints.addArea, newData);

    if (res) {
      dispatch({ type: ADD_AREA_SUCCESS, payload: res.data });
      toast.success("Area/Floor added successfully");
    }
  } catch (error) {
    dispatch({ type: ADD_AREA_ERROR, payload: error.message });
    console.log("error.messag", error.message);
    toast.error("Failed to add Area/Floor");
  }
};

export const deleteAreaData = (id) => async (dispatch) => {
  dispatch({ type: DELETE_AREA_LOADING });
  try {
    let res = await axios.delete(baseURL + areaEndpoints.deleteArea(id));
    console.log("res", res);
    if (res.data) {
      dispatch({ type: DELETE_AREA_SUCCESS, payload: res.data });
      toast.success("Area/Floor Deleted successfully");
    }
  } catch (error) {
    dispatch({ type: DELETE_AREA_ERROR, payload: error.message });
    toast.error("Failed to Deleted Area/Floor");
  }
};

export const updateAreaData =
  ({ id, newobjData }) =>
  async (dispatch) => {
    dispatch({ type: UPDATE_AREA_LOADING });
    try {
      let res = await axios.update(
        baseURL + areaEndpoints.updateArea(id),
        newobjData
      );
      console.log("res", res);
      if (res.data) {
        dispatch({ type: UPDATE_AREA_SUCCESS, payload: res.data });
        toast.success("Area/Floor update successfully");
      }
    } catch (error) {
      dispatch({ type: UPDATE_AREA_ERROR, payload: error.message });
      toast.error("Failed to update Area/Floor");
    }
  };

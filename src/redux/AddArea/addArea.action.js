import { toast } from "react-toastify";
import {
  ADD_AREA_ERROR,  
  ADD_AREA_SUCCESS,
  ADD_AREA_LOADING,
  DELETE_AREA_SUCCESS,
  DELETE_AREA_LOADING,
  DELETE_AREA_ERROR,
} from "./addArea.actionType";
import axios from "axios";


// try {
      //   setLoading(true);
      //   const res = await callApi("POST", "/setting/area/new", finalObj);
      //   console.log(res);
      //   toast.success("Area/Floor added successfully");
      // } catch (error) {
      //   console.error(error);
      //   toast.error("Failed to add Area/Floor");
      // } finally {
      //   setLoading(false);
      // }

const baseURL = "https://famous-bear-kimono.cyclic.app";



export const addAreaData = (newData) => async (dispatch) => {
  dispatch({ type: ADD_AREA_LOADING });
  try {
    let res = await axios.post(`${baseURL}/setting/area/new`,newData);
    console.log("res",res)
    if (res.data) {
      dispatch({ type: ADD_AREA_SUCCESS, payload: res.data });
      toast.success("Area/Floor added successfully");
    }
  } catch (error) {
    dispatch({ type: ADD_AREA_ERROR, payload: error.message });
    toast.error("Failed to add Area/Floor");
  }
};

export const deleteAreaData = (id) => async (dispatch) => {
  dispatch({ type: DELETE_AREA_LOADING });
  try { 
    let res = await axios.delete(`${baseURL}/setting/area/delete/${id}`);
    console.log("res",res)
    if (res.data) {
      dispatch({ type: DELETE_AREA_SUCCESS, payload: res.data });
      toast.success("Area/Floor added successfully");
    }
  } catch (error) {
    dispatch({ type: DELETE_AREA_ERROR, payload: error.message });
    toast.error("Failed to add Area/Floor");
  }
};

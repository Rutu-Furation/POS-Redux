import axios from "axios";
import {
  GET_TABLE_LOADING,
  GET_TABLE_SUCCESS,
  GET_TABLE_ERROR,
  ADD_TABLE_LOADING,
  ADD_TABLE_ERROR,
  ADD_TABLE_SUCCESS,
} from "./table.actionType";
import { toast } from "react-toastify";

const baseURL = "https://famous-bear-kimono.cyclic.app";

export const getTableList = () => async (dispatch) => {
  dispatch({ type: GET_TABLE_LOADING });
  try {
    let res = await axios.get(`${baseURL}/setting/table/list`);
    console.log("res", res);
    if (res) {
      dispatch({ type: GET_TABLE_SUCCESS, payload: res.data });
    }
  } catch (error) {
    dispatch({ type: GET_TABLE_ERROR, payload: error.message });
  }
};

export const addnewTable = (objdata) => async (dispatch) => {
  dispatch({ type: ADD_TABLE_LOADING });
  try {
    let res = await axios.post(`${baseURL}/setting/table/new`, objdata);
    if (res) {
      dispatch({ type: ADD_TABLE_SUCCESS, payload: res.data });
      toast.success("Table added successfully");
    }
  } catch (error) {
    dispatch({ type: ADD_TABLE_ERROR, payload: error.message });
    toast.error("Table add failed");
  }
};


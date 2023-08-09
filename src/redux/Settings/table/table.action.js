import axios from "axios";
import {
  GET_TABLE_LOADING,
  GET_TABLE_SUCCESS,
  GET_TABLE_ERROR,
  ADD_TABLE_LOADING,
  ADD_TABLE_ERROR,
  ADD_TABLE_SUCCESS,
  DELETE_TABLE_LOADING,
  DELETE_TABLE_SUCCESS,
  DELETE_TABLE_ERROR,
} from "./table.actionType";
import { toast } from "react-toastify";

import { baseURL } from "../../../api/apiConfig";
import { tableEndpoints } from "../../../api/api_endpoints/settingsEndpoints";


export const getTableList = () => async (dispatch) => {
  dispatch({ type: GET_TABLE_LOADING });
  try {
    let res = await axios.get(baseURL+tableEndpoints.getAllTables);
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
    let res = await axios.post(baseURL+tableEndpoints.addTable, objdata);
    if (res) {
      dispatch({ type: ADD_TABLE_SUCCESS, payload: res.data });
      toast.success("Table added successfully");
    }
  } catch (error) {
    dispatch({ type: ADD_TABLE_ERROR, payload: error.message });
    toast.error("Table add failed");
  }
};

export const deleteTableData = (id) => async (dispatch) => {
  dispatch({ type: DELETE_TABLE_LOADING });
  try {
    let res = await axios.delete(baseURL + tableEndpoints.deleteTable(id));
    console.log("res", res);
    if (res) {
      dispatch({ type: DELETE_TABLE_SUCCESS, payload: res.data });
      toast.success("Table Deleted successfully");
    }
  } catch (error) {
    dispatch({ type: DELETE_TABLE_ERROR, payload: error.message });
    toast.error("Failed to Deleted Table");
  }
};

import axios from "axios";
import {
  TABLE_LIST_ERROR,
  TABLE_LIST_SUCCESS,
  TABLE_LIST_LOADING,
} from "./table.actionType";

const baseURL = "https://famous-bear-kimono.cyclic.app";

export const getTableList = () => async (dispatch) => {
  dispatch({ type: GET_TABLE_LOADING });
  try {
    let res = await axios.get(`${baseURL}/setting/area/list`);
    if (res.data) {
      dispatch({ type: GET_TABLE_SUCCESS, payload: res.data.areas });
    }
  } catch (error) {
    dispatch({ type: GET_TABLE_ERROR, payload: error.message });
  }
};

export const addTable = (objdata) => async (dispatch) => {
  dispatch({ type: ADD_TABLE_LOADING });
  try {
    let res = await axios.get(`${baseURL}/setting/area/new`, objdata);
    console.log("res", res);
    if (res) {
      dispatch({ type: ADD_TABLE_SUCCESS, payload: res.data.areas });
    }
  } catch (error) {
    dispatch({ type: ADD_TABLEERROR, payload: error.message });
  }
};

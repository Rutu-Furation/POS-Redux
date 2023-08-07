import axios from "axios";
import {
  TABLE_LIST_ERROR,
  TABLE_LIST_SUCCESS,
  TABLE_LIST_LOADING,
} from "./table.actionType";

const baseURL = "https://famous-bear-kimono.cyclic.app";

export const getTableList = () => async (dispatch) => {
  dispatch({ type: TABLE_LIST_LOADING });
  try {
    let res = await axios.get(`${baseURL}/setting/area/list`);
    if (res.data) {
      dispatch({ type: TABLE_LIST_SUCCESS, payload: res.data.areas });
    }
  } catch (error) {
    dispatch({ type: TABLE_LIST_ERROR, payload: error.message });
  }
};

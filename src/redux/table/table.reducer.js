import {
  TABLE_LIST_ERROR,
  TABLE_LIST_SUCCESS,
  TABLE_LIST_LOADING,
} from "./table.actionType";

const tableInitialState = {
  isLoading: false,
  isError: false,
  TableListData: [],
};

export const tableListReducer = (
  state = tableInitialState,
  { type, payload }
) => {
  switch (type) {
    case TABLE_LIST_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case TABLE_LIST_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case TABLE_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        TableListData: payload,
      };
    }
    default: {
        return state;
      }
  }
};

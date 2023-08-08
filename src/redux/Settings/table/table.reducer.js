import {
  GET_TABLE_ERROR,
  GET_TABLE_LOADING,
  GET_TABLE_SUCCESS,
  UPDATE_TABLE_ERROR,
  UPDATE_TABLE_LOADING,
  UPDATE_TABLE_SUCCESS,
  DELETE_TABLE_ERROR,
  DELETE_TABLE_LOADING,
  DELETE_TABLE_SUCCESS,
  ADD_TABLE_ERROR,
  ADD_TABLE_LOADING,
  ADD_TABLE_SUCCESS,
} from "./table.actionType.js";

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
    case GET_TABLE_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_TABLE_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GET_TABLE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        TableListData: payload,
      };
    }

    case ADD_TABLE_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case ADD_TABLE_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case ADD_TABLE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        TableListData: payload,
      };
    }
    case DELETE_TABLE_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case DELETE_TABLE_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case DELETE_TABLE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    case UPDATE_TABLE_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case UPDATE_TABLE_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case UPDATE_TABLE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};

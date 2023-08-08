import {
  ADD_AREA_ERROR,
  ADD_AREA_SUCCESS,
  ADD_AREA_LOADING,
  DELETE_AREA_LOADING,
  DELETE_AREA_ERROR,
  DELETE_AREA_SUCCESS,
  GET_AREA_LOADING,
  GET_AREA_ERROR,
  GET_AREA_SUCCESS,
  UPDATE_AREA_LOADING,
  UPDATE_AREA_ERROR,
  UPDATE_AREA_SUCCESS,
} from "./addArea.actionType";

const AddAreaDataInitialState = {
  isLoading: false,
  isError: false,
  AreaData: [],
};

export const areaReducer = (
  state = AddAreaDataInitialState,
  { type, payload }
) => {
  switch (type) {
    case GET_AREA_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_AREA_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case GET_AREA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        AreaData: payload,
      };
    }

    case ADD_AREA_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case ADD_AREA_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case ADD_AREA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        TableListData: payload,
      };
    }

    case DELETE_AREA_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case DELETE_AREA_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case DELETE_AREA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    case UPDATE_AREA_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case UPDATE_AREA_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case UPDATE_AREA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    default: {
      return state;
    }
  }
};

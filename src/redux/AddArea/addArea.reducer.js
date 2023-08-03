import {
  ADD_AREA_ERROR,  
  ADD_AREA_SUCCESS,
  ADD_AREA_LOADING,
} from "./addArea.actionType";

const AddAreaDataInitialState = {
  isLoading: false,
  isError: false,
  AreaData: [],
};

export const addAreaReducer = (
  state = AddAreaDataInitialState,
  { type, payload }
) => {
  switch (type) {
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
    default: {
        return state;
      }
  }
};

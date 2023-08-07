import {
  ADD_MODIFIER_ERROR,
  ADD_MODIFIER_SUCCESS,
  ADD_MODIFIER_LOADING,
  DELETE_MODIFIER_LOADING,
  DELETE_MODIFIER_ERROR,
  DELETE_MODIFIER_SUCCESS,
} from "./Modifier.actionType.js";

const modifierDataInitialState = {
  isLoading: false,
  isError: false,
  modifierData: [],
};

export const modifierReducer = (
  state = modifierDataInitialState,
  { type, payload }
) => {
  switch (type) {
    case ADD_MODIFIER_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case ADD_MODIFIER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case ADD_MODIFIER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        TableListData: payload,
      };
    }

    case DELETE_MODIFIER_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case DELETE_MODIFIER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case DELETE_MODIFIER_SUCCESS: {
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
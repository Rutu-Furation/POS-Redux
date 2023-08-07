import {
  ADD_FOODMENU_ERROR,
  ADD_FOODMENU_SUCCESS,
  ADD_FOODMENU_LOADING,
  DELETE_FOODMENU_LOADING,
  DELETE_FOODMENU_ERROR,
  DELETE_FOODMENU_SUCCESS,
  UPDATE_FOODMENU_LOADING,
  UPDATE_FOODMENU_ERROR,
  UPDATE_FOODMENU_SUCCESS,
   GET_FOODMENU_LOADING,
  GET_FOODMENU_ERROR,
  GET_FOODMENU_SUCCESS,
} from "./FoodMenu.actionTypes";

const FoodMenuDataInitialState = {
  isLoading: false,
  isError: false,
  FoodMenuData: [],
};

export const FoodMenuReducer = (
  state = FoodMenuDataInitialState,
  { type, payload }
) => {
  switch (type) {
    case GET_FOODMENU_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_FOODMENU_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case GET_FOODMENU_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        FoodMenuData: payload,
      };
    }

    case ADD_FOODMENU_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case ADD_FOODMENU_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case ADD_FOODMENU_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        FoodMenuData: payload,
      };
    }

    case DELETE_FOODMENU_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case DELETE_FOODMENU_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case DELETE_FOODMENU_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    case UPDATE_FOODMENU_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case UPDATE_FOODMENU_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case UPDATE_FOODMENU_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        FoodMenuData: payload,
      };
    }
    default: {
      return state;
    }
  }
};

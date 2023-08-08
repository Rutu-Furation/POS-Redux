import {
  ADD_FOODMENUCATEGORY_ERROR,
  ADD_FOODMENUCATEGORY_SUCCESS,
  ADD_FOODMENUCATEGORY_LOADING,
  DELETE_FOODMENUCATEGORY_LOADING,
  DELETE_FOODMENUCATEGORY_ERROR,
  DELETE_FOODMENUCATEGORY_SUCCESS,
  UPDATE_FOODMENUCATEGORY_ERROR,
  UPDATE_FOODMENUCATEGORY_SUCCESS,
  UPDATE_FOODMENUCATEGORY_LOADING,
  GET_FOODMENUCATEGORY_LOADING,
  GET_FOODMENUCATEGORY_ERROR,
  GET_FOODMENUCATEGORY_SUCCESS,
} from "./FoodMenuCategory.actionTypes.js";

const FoodMenuCategoryDataInitialState = {
  isLoading: false,
  isError: false,
  FoodMenuCategoryData: [],
};

export const FoodMenuCategoryReducer = (
  state = FoodMenuCategoryDataInitialState,
  { type, payload }
) => {
  switch (type) {
    case GET_FOODMENUCATEGORY_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_FOODMENUCATEGORY_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case GET_FOODMENUCATEGORY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        FoodMenuCategoryData: payload,
      };
    }

    case ADD_FOODMENUCATEGORY_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case ADD_FOODMENUCATEGORY_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case ADD_FOODMENUCATEGORY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        FoodMenuCategoryData: payload,
      };
    }

    case DELETE_FOODMENUCATEGORY_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case DELETE_FOODMENUCATEGORY_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case DELETE_FOODMENUCATEGORY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    case UPDATE_FOODMENUCATEGORY_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case UPDATE_FOODMENUCATEGORY_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case UPDATE_FOODMENUCATEGORY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        FoodMenuCategoryData: payload,
      };
    }
    default: {
      return state;
    }
  }
};

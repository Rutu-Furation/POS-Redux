import {
  GET_INGREDIENT_LOADING,
  GET_INGREDIENT_SUCCESS,
  GET_INGREDIENT_ERROR,
  ADD_INGREDIENT_ERROR,
  ADD_INGREDIENT_SUCCESS,
  ADD_INGREDIENT_LOADING,
  UPDATE_INGREDIENT_LOADING,
  UPDATE_INGREDIENT_SUCCESS,
  UPDATE_INGREDIENT_ERROR,
  DELETE_INGREDIENT_LOADING,
  DELETE_INGREDIENT_ERROR,
  DELETE_INGREDIENT_SUCCESS,
} from "./Ingredients.actionType.js";

const IngredientDataInitialState = {
  isLoading: false,
  isError: false,
  IngredientsData: [],
};

export const IngredientReducer = (
  state = IngredientDataInitialState,
  { type, payload }
) => {
  switch (type) {

    case GET_INGREDIENT_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_INGREDIENT_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case GET_INGREDIENT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        IngredientsData: payload,
      };
    }


    case ADD_INGREDIENT_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case ADD_INGREDIENT_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case ADD_INGREDIENT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        IngredientsData: payload,
      };
    }

    case UPDATE_INGREDIENT_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case UPDATE_INGREDIENT_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case UPDATE_INGREDIENT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        IngredientsData: payload,
      };
    }

    case DELETE_INGREDIENT_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case DELETE_INGREDIENT_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case DELETE_INGREDIENT_SUCCESS: {
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

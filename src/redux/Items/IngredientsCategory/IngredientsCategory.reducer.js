import {
  ADD_INGREDIENTCATEGORY_ERROR,
  ADD_INGREDIENTCATEGORY_SUCCESS,
  ADD_INGREDIENTCATEGORY_LOADING,
  DELETE_INGREDIENTCATEGORY_LOADING,
  DELETE_INGREDIENTCATEGORY_ERROR,
  DELETE_INGREDIENTCATEGORY_SUCCESS,
} from "./IngredientsCategory.actionType.js";

const IngredientcategoryDataInitialState = {
  isLoading: false,
  isError: false,
  IngredientcategoryData: [],
};

export const IngredientcategoryReducer = (
  state = IngredientcategoryDataInitialState,
  { type, payload }
) => {
  switch (type) {
    case ADD_INGREDIENTCATEGORY_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case ADD_INGREDIENTCATEGORY_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case ADD_INGREDIENTCATEGORY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        TableListData: payload,
      };
    }

    case DELETE_INGREDIENTCATEGORY_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case DELETE_INGREDIENTCATEGORY_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case DELETE_INGREDIENTCATEGORY_SUCCESS: {
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

import {
  GET_INGREDIENTCATEGORY_LOADING,
  GET_INGREDIENTCATEGORY_SUCCESS,
  GET_INGREDIENTCATEGORY_ERROR,
  ADD_INGREDIENTCATEGORY_ERROR,
  ADD_INGREDIENTCATEGORY_SUCCESS,
  ADD_INGREDIENTCATEGORY_LOADING,
  UPDATE_INGREDIENTCATEGORY_LOADING,
  UPDATE_INGREDIENTCATEGORY_SUCCESS,
  UPDATE_INGREDIENTCATEGORY_ERROR,
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

    case GET_INGREDIENTCATEGORY_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_INGREDIENTCATEGORY_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case GET_INGREDIENTCATEGORY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        IngredientCategoryData: payload,
      };
    }


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
        IngredientCategoryData: payload,
      };
    }


    case UPDATE_INGREDIENTCATEGORY_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case UPDATE_INGREDIENTCATEGORY_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case UPDATE_INGREDIENTCATEGORY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        IngredientCategoryData: payload,
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

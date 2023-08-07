import {
    ADD_INGREDIENT_ERROR,
    ADD_INGREDIENT_SUCCESS,
    ADD_INGREDIENT_LOADING,
    DELETE_INGREDIENT_LOADING,
    DELETE_INGREDIENT_ERROR,
    DELETE_INGREDIENT_SUCCESS,
  } from "./Ingredients.actionType.js";
  
  const IngredientDataInitialState = {
    isLoading: false,
    isError: false,
    IngredientData: [],
  };
  
  export const IngredientReducer = (
    state = IngredientDataInitialState,
    { type, payload }
  ) => {
    switch (type) {
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
          TableListData: payload,
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
  
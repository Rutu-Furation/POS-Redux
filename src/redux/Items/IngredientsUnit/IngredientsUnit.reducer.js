import {
  GET_INGREDIENTUNIT_LOADING,
  GET_INGREDIENTUNIT_SUCCESS,
  GET_INGREDIENTUNIT_ERROR,
  ADD_INGREDIENTUNIT_ERROR,
  ADD_INGREDIENTUNIT_SUCCESS,
  ADD_INGREDIENTUNIT_LOADING,
  UPDATE_INGREDIENTUNIT_LOADING,
  UPDATE_INGREDIENTUNIT_SUCCESS,
  UPDATE_INGREDIENTUNIT_ERROR,
  DELETE_INGREDIENTUNIT_LOADING,
  DELETE_INGREDIENTUNIT_ERROR,
  DELETE_INGREDIENTUNIT_SUCCESS,
} from "./IngredientsUnit.actionType.js";

const IngredientUnitDataInitialState = {
  isLoading: false,
  isError: false,
  IngredientUnitData: [],
};

export const IngredientUnitReducer = (
  state = IngredientUnitDataInitialState,
  { type, payload }
) => {
  switch (type) {

    case GET_INGREDIENTUNIT_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_INGREDIENTUNIT_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case GET_INGREDIENTUNIT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        IngredientUnitsData: payload,
      };
    }




    case ADD_INGREDIENTUNIT_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case ADD_INGREDIENTUNIT_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case ADD_INGREDIENTUNIT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        IngredientUnitsData: payload,
      };
    }



    case UPDATE_INGREDIENTUNIT_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case UPDATE_INGREDIENTUNIT_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case UPDATE_INGREDIENTUNIT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        IngredientUnitsData: payload,
      };
    }




    case DELETE_INGREDIENTUNIT_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case DELETE_INGREDIENTUNIT_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case DELETE_INGREDIENTUNIT_SUCCESS: {
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

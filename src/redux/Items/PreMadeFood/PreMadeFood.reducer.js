import {
  GET_PREMADEFOOD_LOADING,
  GET_PREMADEFOOD_SUCCESS,
  GET_PREMADEFOOD_ERROR,
  ADD_PREMADEFOOD_ERROR,
  ADD_PREMADEFOOD_SUCCESS,
  ADD_PREMADEFOOD_LOADING,
  UPDATE_PREMADEFOOD_LOADING,
  UPDATE_PREMADEFOOD_SUCCESS,
  UPDATE_PREMADEFOOD_ERROR,
  DELETE_PREMADEFOOD_LOADING,
  DELETE_PREMADEFOOD_ERROR,
  DELETE_PREMADEFOOD_SUCCESS,
} from "./PreMadeFood.actionType.js";

const PreMadeFoodDataInitialState = {
  isLoading: false,
  isError: false,
  premadefood: [],
};

export const premadefoodReducer = (
  state = PreMadeFoodDataInitialState,
  { type, payload }
) => {
  switch (type) {

    case GET_PREMADEFOOD_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_PREMADEFOOD_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case GET_PREMADEFOOD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        PreMadeFoodData: payload,
      };
    }



    case ADD_PREMADEFOOD_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case ADD_PREMADEFOOD_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case ADD_PREMADEFOOD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        PreMadeFoodData: payload,
      };
    }



    case UPDATE_PREMADEFOOD_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case UPDATE_PREMADEFOOD_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case UPDATE_PREMADEFOOD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        PreMadeFoodData: payload,
      };
    }




    case DELETE_PREMADEFOOD_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case DELETE_PREMADEFOOD_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case DELETE_PREMADEFOOD_SUCCESS: {
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

import {
    ADD_PREMADEFOOD_ERROR,
    ADD_PREMADEFOOD_SUCCESS,
    ADD_PREMADEFOOD_LOADING,
    DELETE_PREMADEFOOD_LOADING,
    DELETE_PREMADEFOOD_ERROR,
    DELETE_PREMADEFOOD_SUCCESS,
  } from "./PreMadeFood.actionType.js";
  
  const PreMadeFoodDataInitialState = {
    isLoading: false,
    isError: false,
    premadefood: [],
  };
  
  export const  premadefoodReducer = (
    state = PreMadeFoodDataInitialState,
    { type, payload }
  ) => {
    switch (type) {
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
          TableListData: payload,
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
  
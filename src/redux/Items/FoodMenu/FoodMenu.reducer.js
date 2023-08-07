import {
    ADD_FOODMENU_ERROR,
    ADD_FOODMENU_SUCCESS,
    ADD_FOODMENU_LOADING,
    DELETE_FOODMENU_LOADING,
    DELETE_FOODMENU_ERROR,
    DELETE_FOODMENU_SUCCESS,
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
          TableListData: payload,
        };
      }
  
      case DELETE_FOODMENU_LOADING:{
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      }
  
      case DELETE_FOODMENU_ERROR:{
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }
  
      case DELETE_FOODMENU_SUCCESS:{
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
  
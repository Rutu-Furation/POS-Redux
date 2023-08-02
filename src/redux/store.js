import { applyMiddleware, combineReducers, legacy_createStore,compose } from "redux";
import thunk from "redux-thunk";

import { tableListReducer } from "./table/table.reducer";

const rootReducer = combineReducers({
  table: tableListReducer,
  
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

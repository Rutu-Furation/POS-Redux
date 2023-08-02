import { applyMiddleware, combineReducers, legacy_createStore,compose } from "redux";
import thunk from "redux-thunk";

import { tableListReducer } from "./table/table.reducer";
import { addAreaReducer } from "./AddArea/addArea.reducer";

const rootReducer = combineReducers({
  table: tableListReducer,
  addArea:addAreaReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

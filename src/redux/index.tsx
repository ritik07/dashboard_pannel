import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { test } from "./reducers/test";

const reducer = combineReducers({
  test,
});

export const store = createStore(reducer, applyMiddleware(thunk));

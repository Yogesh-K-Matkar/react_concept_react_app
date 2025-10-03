import { createStore, applyMiddleware } from "redux";
import { taskReducer } from "./reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

export const taskStore = createStore(
  taskReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

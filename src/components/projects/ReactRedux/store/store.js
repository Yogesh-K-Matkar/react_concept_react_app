import { createStore } from "redux";
import { taskReducer } from "./reducers";
import { composeWithDevTools } from "@redux-devtools/extension";

export const taskStore = createStore(taskReducer, composeWithDevTools());

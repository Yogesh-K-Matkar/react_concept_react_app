import { createStore } from "redux";
import { taskReducer } from "./reducers";

export const taskStore = createStore(taskReducer);

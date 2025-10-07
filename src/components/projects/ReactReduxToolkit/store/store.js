import { configureStore } from "@reduxjs/toolkit";
import { taskReducerSlice } from "../features/tasks/tasksSlice";

export const taskStore = configureStore({
  reducer: { taskReducer: taskReducerSlice.reducer },
});

console.log(taskStore);

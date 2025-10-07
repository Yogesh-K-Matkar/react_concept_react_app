import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  isLoading: false,
};

export const taskReducerSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    fetchTask: (state, action) => {
      state.tasks = [...state.tasks, ...action.payload];
    },
    addTask(state, action) {
      state.tasks = [...state.tasks, action.payload];
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (task, index) => index !== action.payload
      );
    },
    clearAllTask: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { fetchTask, addTask, deleteTask, clearAllTask } =
  taskReducerSlice.actions;

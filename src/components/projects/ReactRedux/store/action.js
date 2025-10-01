/* eslint-disable no-case-declarations */
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

export const taskAction = (state, actionTaken, payloadDetails) => {
  switch (actionTaken) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, payloadDetails.taskDetails.name],
      };

    case DELETE_TASK:
      const updatedTask = state.tasks.filter(
        (task) => task !== payloadDetails.taskDetails.name
      );

      return {
        ...state,
        tasks: updatedTask,
      };

    default:
      return state;
  }
};

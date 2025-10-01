/* eslint-disable no-case-declarations */
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

export const taskAction = (state, actionTaken, payloadDetails) => {
  let taskIndex = 0;
  let taskName = "";

  if (payloadDetails === undefined) {
    return state;
  } else if (payloadDetails.taskDetails === undefined) {
    return state;
  } else {
    if (
      actionTaken === ADD_TASK &&
      payloadDetails.taskDetails.name === undefined
    ) {
      return state;
    } else if (
      actionTaken === DELETE_TASK &&
      payloadDetails.taskDetails.index === undefined
    ) {
      return state;
    } else {
      taskIndex = payloadDetails.taskDetails.index;
      taskName = payloadDetails.taskDetails.name;
    }
  }

  switch (actionTaken) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, taskName],
      };

    case DELETE_TASK:
      const updatedTask = state.tasks.filter(
        (task, index) => index !== taskIndex
      );

      return {
        ...state,
        tasks: updatedTask,
      };

    default:
      return state;
  }
};

//Action Creator
export const addTask = (TaskPayload) => {
  return {
    type: "task/add",
    payload: { taskDetails: TaskPayload },
  };
};

export const deleteTask = (TaskPayload) => {
  return {
    type: "task/delete",
    payload: { taskDetails: TaskPayload },
  };
};

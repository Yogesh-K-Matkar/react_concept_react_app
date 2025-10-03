import { fetchTaskResponse } from "../api/api";

/* eslint-disable no-case-declarations */
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const FETCH_TASK = "task/fetch";

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
    } else if (
      actionTaken === FETCH_TASK &&
      payloadDetails.taskDetails.tasks === undefined
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

    case FETCH_TASK:
      console.log("Payload:-", payloadDetails.taskDetails.tasks);

      return {
        ...state,
        tasks: [...state.tasks, ...payloadDetails.taskDetails.tasks],
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

export const fetchTasks = (TaskPayload) => {
  return {
    type: "task/fetch",
    payload: { taskDetails: TaskPayload },
  };
};

//Redux Thunk is used for Server-Side Call it can be API or External Sources
export const fetchTaskListApi = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchTaskResponse();

      console.log(resp);

      if (resp.status === 200) {
        console.log(resp.data);

        const data = resp.data;

        dispatch(fetchTasks({ tasks: data.map((task) => task.title) }));
      } else {
        return [];
      }
    } catch (error) {
      throw new Error(error);
    }
  };
};

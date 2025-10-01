import { taskAction } from "./action";

//Task Reducer
const initialState = {
  tasks: [],
  isLoading: false,
};

export const taskReducer = (state = initialState, action) => {
  if (state.tasks === undefined) {
    return [];
  }
  let actionTaken = action === undefined ? "" : action.type;
  let payloadDetails = action === undefined ? "" : action.payload;

  console.log("Initial Task:-", state, actionTaken, payloadDetails);

  return taskAction(state, actionTaken, payloadDetails);
};

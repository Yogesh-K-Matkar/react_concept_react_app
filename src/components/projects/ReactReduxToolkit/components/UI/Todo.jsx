import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTask,
  addTask,
  deleteTask,
  clearAllTask,
} from "../../features/tasks/tasksSlice";
import { fetchTaskListAPI } from "../../features/tasks/tasksAPIDataUtils";
import { MdDeleteForever } from "react-icons/md";

const Todo = () => {
  const [newTask, setNewTask] = useState("");

  const tasks = useSelector((taskStore) => taskStore.taskReducer.tasks);

  console.log(tasks);

  const dispatch = useDispatch();

  const handleTaskFetch = async (e) => {
    e.preventDefault();

    const apiTasks = await fetchTaskListAPI();

    dispatch(fetchTask(apiTasks));

    return setNewTask("");
  };

  const handleSubmitNewTask = (e) => {
    e.preventDefault();

    dispatch(addTask(newTask));

    return setNewTask("");
  };

  const handleTaskDelete = (e, index) => {
    e.preventDefault();
    console.log("Index:-", index);

    dispatch(deleteTask(index));

    return setNewTask("");
  };

  const handleTaskClearAll = (e) => {
    e.preventDefault();

    dispatch(clearAllTask([]));
  };

  return (
    <div className="todo-container">
      <div className="todo-app">
        <h1>
          <i className="fa-regular fa-pen-to-square">To-do List</i>
        </h1>
        <div className="row">
          <form onSubmit={(e) => handleSubmitNewTask(e)}>
            <input
              type="text"
              id="input-box"
              placeholder="Add a new task"
              required
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button type="submit">Add Task</button>
          </form>
        </div>

        <button onClick={(e) => handleTaskFetch(e)}>Fetch Task</button>

        <ul id="list-container">
          {tasks.length === 0 ? (
            <p>No Task Available</p>
          ) : (
            tasks?.map((task, index) => (
              <li key={index}>
                <p>
                  {index}: {task}
                </p>
                <div>
                  <MdDeleteForever
                    className="icon-style"
                    onClick={(e) => handleTaskDelete(e, index)}
                  />
                </div>
              </li>
            ))
          )}
          {tasks.length > 0 ? (
            <button onClick={(e) => handleTaskClearAll(e)}>
              Clear All Task
            </button>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default Todo;

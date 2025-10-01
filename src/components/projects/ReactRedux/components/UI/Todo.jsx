import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { addTask, deleteTask } from "../../store/action";

import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const [newTask, setNewTask] = useState("");

  const tasks = useSelector((store) => store.tasks);

  console.log("State as Task from Store:-", tasks);

  const dispatch = useDispatch();

  const handleSubmitNewTask = (e) => {
    e.preventDefault();

    dispatch(addTask({ name: newTask }));

    return setNewTask("");
  };

  const handleTaskDelete = (e, index) => {
    e.preventDefault();
    console.log("Index:-", index);

    dispatch(deleteTask({ index: index }));

    return setNewTask("");
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
        </ul>
      </div>
    </div>
  );
};

export default Todo;

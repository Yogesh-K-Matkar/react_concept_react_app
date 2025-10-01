//import { MdDeleteForever } from "react-icons/md";
//import { useStore } from "react-redux";

const Todo = () => {
  return (
    <div className="container">
      <div className="todo-app">
        <h1>
          <i className="fa-regular fa-pen-to-square"></i>To-do List:
        </h1>
        <div className="row">
          <form>
            <input type="text" id="input-box" placeholder="Add a new task" />
            <button type="submit">Add</button>
          </form>
        </div>
        <ul id="list-container"></ul>
      </div>
    </div>
  );

  // const taskStore = useStore();

  // console.log("Current Task:-", taskStore.getState());

  // //Action Creator
  // const addTask = (TaskPayload) => {
  //   return {
  //     type: "task/add",
  //     payload: { taskDetails: TaskPayload },
  //   };

  //   //console.log("Added Task:-", taskStore.getState());
  // };
  // const deleteTask = (TaskPayload) => {
  //   return {
  //     type: "task/delete",
  //     payload: { taskDetails: TaskPayload },
  //   };

  //   //console.log("Deleted Task:-", taskStore.getState());
  // };

  // //

  // return (
  //   <>
  //     <h1>Content:-</h1>
  //     <button
  //       value="add"
  //       // onClick={() =>
  //       //   taskStore.dispatch({
  //       //     type: "task/add",
  //       //     payload: { formName: "Task", taskDetails: { name: "Task Add-1" } },
  //       //   })
  //       // }

  //       onClick={() => taskStore.dispatch(addTask({ name: "Task Add-1" }))}
  //     >
  //       Add Task1
  //     </button>
  //     <button
  //       value="add"
  //       // onClick={() =>
  //       //   taskStore.dispatch({
  //       //     type: "task/add",
  //       //     payload: { formName: "Task", taskDetails: { name: "Task Add-2" } },
  //       //   })
  //       // }

  //       onClick={() => taskStore.dispatch(addTask({ name: "Task Add-2" }))}
  //     >
  //       Add Task2
  //     </button>
  //     <button
  //       value="delete"
  //       // onClick={() =>
  //       //   taskStore.dispatch({
  //       //     type: "task/delete",
  //       //     payload: { formName: "Task", taskDetails: { name: "Task Add-1" } },
  //       //   })
  //       // }

  //       onClick={() => taskStore.dispatch(deleteTask({ name: "Task Add-1" }))}
  //     >
  //       <MdDeleteForever style={{ color: "red" }} />
  //     </button>
  //   </>
  // );
};

export default Todo;

import { useState } from "react";

export const TodoForm = (props) => {
  const { pCSSModule, pStyled, pFormSubmitAddTodo } = props;
  const [addTodo, setAddTodo] = useState({
    id: "",
    content: "",
    checked: false,
  });

  function handleChangeEnterTodo(e) {
    const addtodovalue = e.target.value;
    setAddTodo({ id: addtodovalue, content: addtodovalue, checked: false });
  }

  function pFrmSubmitAddTodo(e) {
    e.preventDefault();
    pFormSubmitAddTodo(addTodo);
    setAddTodo({ id: "", content: "", checked: false });
  }

  return (
    <section className={pCSSModule["form"]}>
      <AddTodo
        pCSSModule={pCSSModule}
        pStyled={pStyled}
        pAddTodo={addTodo}
        pFormSubmitAddTodo={(evt) => pFrmSubmitAddTodo(evt)}
        pChangeEnterTodo={handleChangeEnterTodo}
      ></AddTodo>
    </section>
  );
};

const AddTodo = (props) => {
  // console.log(props);
  const {
    pCSSModule,
    pStyled,
    pAddTodo,
    pFormSubmitAddTodo,
    pChangeEnterTodo,
  } = props;

  const TodoActionAddButton = pStyled.button({});

  return (
    <form onSubmit={(evt) => pFormSubmitAddTodo(evt)}>
      <div>
        <input
          type="text"
          autoComplete="off"
          className={pCSSModule["todo-input"]}
          value={pAddTodo.content}
          onChange={(evt) => pChangeEnterTodo(evt)}
        ></input>
      </div>
      <div>
        <TodoActionAddButton type="submit" className={pCSSModule["todo-btn"]}>
          Add Task
        </TodoActionAddButton>
      </div>
    </form>
  );
};

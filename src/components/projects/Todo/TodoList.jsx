import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = (props) => {
  const {
    pCSSModule,
    pStyled,
    pTodoList,
    pActionCheckedTodo,
    pActionDeleteTodo,
  } = props;

  return (
    <section className={pCSSModule["myUnOrdList"]}>
      <Todo
        pStyled={pStyled}
        pCSSModule={pCSSModule}
        pTodoList={pTodoList}
        pActionCheckedTodo={pActionCheckedTodo}
        pActionDeleteTodo={pActionDeleteTodo}
      />
    </section>
  );
};

const Todo = (props) => {
  // console.log(props);

  const {
    pStyled,
    pCSSModule,
    pTodoList,
    pActionCheckedTodo,
    pActionDeleteTodo,
  } = props;
  const TodoActionButton = pStyled.button({});

  function handleActionCheckedTodoItem(checkedTodo) {
    pActionCheckedTodo(checkedTodo);
  }

  function handleActionDeleteTodoItem(deleteTodoId) {
    pActionDeleteTodo(deleteTodoId);
  }

  return pTodoList.length == 0 ? (
    <h1 className={pCSSModule["noRecord"]}>No Task Added Yet</h1>
  ) : (
    <ul>
      {pTodoList.map((todo) => (
        <li key={todo.id} className={pCSSModule["todo-item"]}>
          <span
            className={
              todo.checked
                ? pCSSModule["checkList"]
                : pCSSModule["notCheckList"]
            }
          >
            {todo.content}
          </span>
          <TodoActionButton
            className={pCSSModule["form button"]}
            onClick={() => handleActionCheckedTodoItem(todo)}
          >
            <MdCheck className={pCSSModule["check-btn"]} />
          </TodoActionButton>
          <TodoActionButton
            className={pCSSModule["form button"]}
            onClick={() => handleActionDeleteTodoItem(todo.id)}
          >
            <MdDeleteForever className={pCSSModule["delete-btn"]} />
          </TodoActionButton>
        </li>
      ))}
    </ul>
  );
};

import { useState } from "react";
import cssModule from "./Todos.module.css";
import styled from "styled-components";

import { TodoDateTime } from "./TodoDateTime.jsx";
import { TodoForm } from "./TodoForm.jsx";
import { TodoList } from "./TodoList.jsx";
import {
  GetTodoListLocalStoreKey,
  SetTodoListLocalStoreKey,
} from "./TodoListLocalStoreKey.jsx";

/* Notes:-
1. Spread Operator expand collection,array.
   A. Collection or Array  

    eg var array1=["a","b","c"];
       var array2=["x","y","z"];

       var mergearray1=[...array1,"x"];
       var mergearray12=[...array1,...array2];
     
       console.log(mergearray1);           //["a","b","c","x"]
       console.log(mergearray12);          //["a","b","c","x","y","z"]

 
   B. Object

   eg. const obj={id:1,name:"a"};

    const obj1={...obj,name:"b"};

    console.log(obj1)  // {id:1,name:"b"}   //Expand object properties to update value of required property



*/

export const Todos = () => {
  const [todoList, setTodoList] = useState(() => GetTodoListLocalStoreKey());

  const handleFormSubmitAddTodo = (addTodo) => {
    const { id, content, checked } = addTodo;

    if (content == "") return; //Empty check

    //if (todoList.includes(addTodo)) return; //Duplicate check
    const IsTodoContentMatched = todoList.find(
      (todo) => todo.content === content
    );
    if (IsTodoContentMatched) return; //Duplicate check

    setTodoList((prevTodoList) => [
      ...prevTodoList,
      { id, content, checked }, //Key:Value is same then do as {id:id,content:content,checked:checked} then consider as {id,content.checked} as per EMCScript rule
    ]);
  };

  //Todo add data to localStorage SetTodoListLocalStoreKey function
  SetTodoListLocalStoreKey(todoList);

  //Todo handleActionCheckedTodo function
  const handleActionCheckedTodo = (checkedTodo) => {
    const updateTodoList = todoList.map((todo) => {
      if (todo.id == checkedTodo.id) {
        return { ...todo, checked: !checkedTodo.checked };
      } else {
        return todo;
      }
    });
    setTodoList(updateTodoList);
  };

  //Todo handleActionDeleteTodo function
  const handleActionDeleteTodo = (deleteTodoId) => {
    const updateTodoList = todoList.filter((todo) => todo.id != deleteTodoId);
    setTodoList(updateTodoList);
  };

  const TodoActionClearAllButton = styled.button({});

  //Todo handleClearAllTodo function
  const handleClearAllTodo = () => {
    setTodoList([]);
  };

  return (
    <section className={cssModule["todo-container"]}>
      <header>
        <h1>Todo List</h1>
        <TodoDateTime pCSSModule={cssModule} />
      </header>
      <TodoForm
        pCSSModule={cssModule}
        pStyled={styled}
        pFormSubmitAddTodo={handleFormSubmitAddTodo}
      />
      <TodoList
        pTodoList={todoList}
        pCSSModule={cssModule}
        pStyled={styled}
        pActionCheckedTodo={handleActionCheckedTodo}
        pActionDeleteTodo={handleActionDeleteTodo}
      />

      <section>
        <TodoActionClearAllButton
          className={cssModule["clear-btn"]}
          onClick={handleClearAllTodo}>
          Clear All
        </TodoActionClearAllButton>
      </section>
    </section>
  );
};

const GetDateTime = (props) => {
  const { pDateTime } = props;

  return <h2 className={cssModule["date-time"]}>{pDateTime}</h2>;
};

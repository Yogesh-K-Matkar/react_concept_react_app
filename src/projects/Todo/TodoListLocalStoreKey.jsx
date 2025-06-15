const todoListLocalStoreKey = "reactTodoList";

export const GetTodoListLocalStoreKey = () => {
  const rawTodoList = localStorage.getItem(todoListLocalStoreKey);

  if (rawTodoList == "undefined" || rawTodoList == "null" || rawTodoList == "")
    return []; //localStorage IS EMPTY OR NULL then return empty array []
  else return JSON.parse(rawTodoList);
};

export const SetTodoListLocalStoreKey = (todos) => {
  return localStorage.setItem(todoListLocalStoreKey, JSON.stringify(todos));
};

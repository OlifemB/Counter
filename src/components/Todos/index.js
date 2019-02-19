import React from "react";

import { AddTodo } from "components/Todos/AddTodo";
import { TodoList } from "components/Todos/TodoList";
import { Filter } from "components/Todos/Filter";

export const Todos = () => {
  return (
    <>
      <h1>Todo List</h1>
      <Filter />
      <AddTodo />
      <TodoList />
      <hr />
    </>
  );
};

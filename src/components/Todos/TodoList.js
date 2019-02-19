import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { deleteTodo, toggleTodo } from "redux/todos";

import { getTodosById, getVisibleTodoIds } from "components/Todos/selectors";

const _TodoList = ({ todos, allIds, deleteTodo, toggleTodo }) => {
  const handleTodoDelete = id => () => {
    deleteTodo({
      id
    });
  };

  const handleTodoToggle = id => () => {
    toggleTodo({
      id
    });
  };

  return (
    <ul>
      {allIds.map(id => (
        <li key={id}>
          <span
            onClick={handleTodoToggle(id)}
            style={{
              textDecoration: todos[id].completed ? "line-through" : "none",
              userSelect: "none"
            }}
          >
            {todos[id].text}
          </span>{" "}
          <button onClick={handleTodoDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

_TodoList.propTypes = {
  // From connect - state
  todos: PropTypes.object.isRequired,
  allIds: PropTypes.array.isRequired,
  // From connect - actions
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export const TodoList = connect(
  state => ({
    todos: getTodosById(state),
    allIds: getVisibleTodoIds(state)
  }),
  {
    deleteTodo,
    toggleTodo
  }
)(_TodoList);

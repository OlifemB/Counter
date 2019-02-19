import React, { useState } from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import { connect } from "react-redux";

import { addTodo } from "redux/todos";

const _AddTodo = ({ addTodo }) => {
  let todoInput = React.createRef();

  const [todoText, setTodoText] = useState("");

  const handleSetTodoText = event => setTodoText(event.target.value);

  const handleFormSubmit = event => {
    event.preventDefault();

    if (!todoText.trim()) {
      return;
    }

    addTodo({
      id: uuid(),
      text: todoText
    });

    setTodoText("");

    todoInput.current.focus();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Enter new todo{" "}
        <input
          type="text"
          onChange={handleSetTodoText}
          value={todoText}
          ref={todoInput}
        />
        <button type="submit">ADD</button>
      </label>
    </form>
  );
};

_AddTodo.propTypes = {
  // From connect - actions
  addTodo: PropTypes.func.isRequired
};

export const AddTodo = connect(
  null,
  {
    addTodo
  }
)(_AddTodo);

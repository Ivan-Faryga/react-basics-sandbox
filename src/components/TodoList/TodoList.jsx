import React from "react";
import "./TodoList.css";

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <li key={id} className="TodoList__item">
          <p className="TodoList__text">{text}</p>
          <button onClick={() => onDeleteTodo(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

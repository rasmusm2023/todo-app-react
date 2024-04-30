import React from "react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const handleCheckboxChange = () => {
    onToggle(todo.id);
  };

  const todoItemCardClass = todo.completed
    ? "todoItemCard completed"
    : "todoItemCard";

  return (
    <div className={todoItemCardClass}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxChange}
        className="todo-checkbox"
      />
      <div className="todo-text">{todo.text}</div>
      <button onClick={() => onDelete(todo.id)} className="delete-button">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;

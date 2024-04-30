import React, { useState } from "react";
// import "./src/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
// import Landingpage from "./pages/Landingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="wrapper">
      <TodoForm onAdd={addTodo} />
      <div className="content">
        <TodoList
          todos={todos}
          onToggle={toggleCompletion}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
};

export default App;

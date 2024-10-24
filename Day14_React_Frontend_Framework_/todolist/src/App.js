import './App.css';
import Header from './Mycomponents/Header';
import TodoList from './Mycomponents/TodoList';
import Footer from './Mycomponents/Footer';
import React, { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([

    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a To-Do List App' },
    { id: 3, text: 'Take a break' },
  ]);

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  return (
    <>
      <Header />
      <TodoList todos={todos} onDelete={handleDelete} />
      <Footer />


    </>
  );
}

export default App;

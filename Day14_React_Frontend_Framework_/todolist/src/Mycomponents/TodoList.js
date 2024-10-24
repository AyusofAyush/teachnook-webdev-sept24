import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: todos.length + 1,
        text: newTodo,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list-container">
      <h2 className="todo-list-title">To-Do List</h2>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
          className="todo-input"
        />
        <button onClick={handleAddTodo} className="todo-button">Add Task</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)} className="todo-delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
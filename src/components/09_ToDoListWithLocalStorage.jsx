import React, { useState, useEffect } from 'react';
import './09_ToDoListWithLocalStorage.css';

function TodoList() {
  const [inputValue, setInputValue] = useState('');

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const textValue = inputValue.trim();
    
    if (textValue === '') return;

    const newTodo = { 
        id: Date.now(), 
        text: textValue, 
        completed: false 
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map(todo => { 
        if (todo.id === id) { 
            return { ...todo, completed: !todo.completed }; 
        }
        return todo; 
    });
    setTodos(updatedTodos);
  };

  const handleClearCompleted = () => {
    const activeTodos = todos.filter(todo => !todo.completed);
    setTodos(activeTodos);
  };

  return (
    <div className="todo-wrapper">
      <div className="container">
        <h2>Todo List</h2>
        
        <form className="input-group" onSubmit={handleAddTodo}>
          <input 
            type="text" 
            id="todo-input" 
            placeholder="Add a new task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="add-btn">Add</button>
        </form>

        <ul id="todo-list" className="todo-list">
          {todos.map((todo) => (
            <li 
              key={todo.id} 
              className={`todo-item ${todo.completed ? 'completed' : ''}`}
            >
              <input 
                type="checkbox" 
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
              />
              <span>{todo.text}</span>
            </li>
          ))}
        </ul>

        <button className="clear-btn" onClick={handleClearCompleted}>
          Clear Completed Tasks
        </button>
      </div>
    </div>
  );
}

export default TodoList;


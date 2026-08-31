import React, { useState, useEffect } from 'react';
import './09_ToDoListWithLocalStorage.css';

function TodoList() {
  // 1. Estado para el input de texto
  const [inputValue, setInputValue] = useState('');

  // 2. Estado para la lista de tareas. Se inicializa leyendo de LocalStorage de forma reactiva (Tu init original)
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // 3. Este hook guarda automáticamente en LocalStorage cada vez que cambie la lista de tareas
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // 4. Función para agregar una tarea (Reemplaza a addTodo)
  const handleAddTodo = (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario
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

  // 5. Función para cambiar el estado de completado (Reemplaza a toggleTodo)
  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map(todo => { 
        if (todo.id === id) { 
            return { ...todo, completed: !todo.completed }; 
        }
        return todo; 
    });
    setTodos(updatedTodos);
  };

  // 6. Función para limpiar tareas completadas (Reemplaza a clearCompletedTodos)
  const handleClearCompleted = () => {
    const activeTodos = todos.filter(todo => !todo.completed);
    setTodos(activeTodos);
  };

  return (
    <div className="todo-wrapper">
      <div className="container">
        <h2>Todo List</h2>
        
        {/* En React, usar un formulario nos da el soporte de la tecla Enter automáticamente */}
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

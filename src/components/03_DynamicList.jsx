import React, { useState } from 'react';
import './03_DynamicList.css';

function DynamicList() {
  // Estado para controlar el texto del input
  const [inputValue, setInputValue] = useState('');
  // Estado para almacenar la lista de elementos
  const [items, setItems] = useState([]);

  // Función para agregar un nuevo elemento a la lista
  const handleAddItem = () => {
    const text = inputValue.trim();

    if (text === "") {
        alert("Please, write something before adding.");
        return; 
    }

    // Creamos un nuevo objeto con un ID único y el texto
    const newItem = {
      id: Date.now(),
      text: text
    };

    // Agregamos el nuevo objeto al arreglo de elementos
    setItems([...items, newItem]);
    // Limpiamos el campo del input
    setInputValue('');
  };

  // Función para eliminar un elemento filtrando el arreglo por su ID
  const handleDeleteItem = (idToDelete) => {
    const filteredItems = items.filter(item => item.id !== idToDelete);
    setItems(filteredItems);
  };

  return (
    <div className="list-container">
      <h2>Dynamic List</h2>
      
      <div className="form">
        {/* En React vinculamos el valor del input al estado usando value y onChange */}
        <input 
          type="text" 
          id="input" 
          placeholder="Write something here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button id="btn-add" onClick={handleAddItem}>Add</button>
      </div>

      {/* Renderizamos el arreglo mapeándolo a elementos de lista HTML */}
      <ul id="dynamic-list">
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button 
              className="btn-erase" 
              onClick={() => handleDeleteItem(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicList;

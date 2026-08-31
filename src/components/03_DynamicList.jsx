import React, { useState } from 'react';
import './03_DynamicList.css';

function DynamicList() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    const text = inputValue.trim();

    if (text === "") {
        alert("Please, write something before adding.");
        return; 
    }

    const newItem = {
      id: Date.now(),
      text: text
    };

    setItems([...items, newItem]);
    setInputValue('');
  };

  const handleDeleteItem = (idToDelete) => {
    const filteredItems = items.filter(item => item.id !== idToDelete);
    setItems(filteredItems);
  };

  return (
    <div className="list-container">
      <h2>Dynamic List</h2>
      
      <div className="form">
        <input 
          type="text" 
          id="input" 
          placeholder="Write something here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button id="btn-add" onClick={handleAddItem}>Add</button>
      </div>

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

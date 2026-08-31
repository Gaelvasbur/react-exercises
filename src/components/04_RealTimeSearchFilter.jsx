import React, { useState } from 'react';
import './04_RealTimeSearchFilter.css';

function RealTimeSearchFilter() {
  // 1. Estado para almacenar el texto que escribe el usuario
  const [searchTerm, setSearchTerm] = useState('');

  // 2. Lista base de animales (los mismos que tenías en tu HTML)
  const initialAnimals = ['Dog', 'Cat', 'Fish', 'Parrot', 'Elephant', 'Tiger'];

  // 3. Filtramos la lista en tiempo real basándonos en el estado 'searchTerm'
  const filteredAnimals = initialAnimals.filter(animal => 
    animal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="filter-container">
      <h2>Animal filter</h2>
      
      {/* Vinculamos el input al estado con value y onChange */}
      <input 
        type="text" 
        id="search-input" 
        placeholder="Write to filter..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
     
      <ul id="lista-animales">
        {/* Mapeamos únicamente los animales filtrados */}
        {filteredAnimals.map((animal, index) => (
          <li key={index} className="animal">
            {animal}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RealTimeSearchFilter;

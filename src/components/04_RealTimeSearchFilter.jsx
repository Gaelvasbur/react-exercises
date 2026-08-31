import React, { useState } from 'react';
import './04_RealTimeSearchFilter.css';

function RealTimeSearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');

  const initialAnimals = ['Dog', 'Cat', 'Fish', 'Parrot', 'Elephant', 'Tiger'];

  const filteredAnimals = initialAnimals.filter(animal => 
    animal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="filter-container">
      <h2>Animal filter</h2>
      
      <input 
        type="text" 
        id="search-input" 
        placeholder="Write to filter..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
     
      <ul id="lista-animales">
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

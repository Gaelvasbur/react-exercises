import React, { useState } from 'react';
import './02_ClickCounter.css';

function ClickCounter() {
  // 1. Reemplazamos 'let numberOfClicks = 0' por un estado de React
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  // 2. La función que maneja el evento clic y actualiza el contador
  const handleCount = () => {
    setNumberOfClicks(numberOfClicks + 1);
  };

  return (
    <div className="counter-container">
      
      {/* Pintamos el estado directamente en el HTML de forma reactiva */}
      <div id="counter">Clics: {numberOfClicks}</div>
      
      {/* Añadimos el onClick que llama a nuestra función */}
      <button id="btn-contar" onClick={handleCount}>
        Count clics
      </button>

    </div>
  );
}

export default ClickCounter;

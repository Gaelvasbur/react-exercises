import React, { useState } from 'react';
import './02_ClickCounter.css';

function ClickCounter() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  const handleCount = () => {
    setNumberOfClicks(numberOfClicks + 1);
  };

  return (
    <div className="counter-container">
      <div id="counter">Clics: {numberOfClicks}</div>
      <button id="btn-contar" onClick={handleCount}>
        Count clics
      </button>
    </div>
  );
}

export default ClickCounter;


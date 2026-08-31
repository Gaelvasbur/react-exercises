import React, { useState } from 'react';
import './01_ColorFlipper.css';

function ColorFlipper() {
  const [bgColor, setBgColor] = useState('#ffffff');

  function generateRandomColor() {
    const characters = '0123456789ABCDEF';
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += characters[Math.floor(Math.random() * 16)];
    }
    return hexColor;
  }

  const handleClick = () => {
    const nextColor = generateRandomColor();
    setBgColor(nextColor);
  };

  return (
    <div className="flipper-container" style={{ backgroundColor: bgColor }}>
      <button id="btn-color" onClick={handleClick}>
        Change color
      </button>
    </div>
  );
}

export default ColorFlipper;

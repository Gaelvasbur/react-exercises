import React, { useState } from 'react';
import './01_ColorFlipper.css';
//yo lo entiendo asi: la magia sucede en el hook, que da el color y la funcion que genera la actualizacion de color
//esa es la funcion que sera llamada al hacer click, gracias a que ya se creo el color aleatorio 
function ColorFlipper() {
  // 1. Creamos el estado para almacenar el color actual (empieza en blanco) la variable con el valor actual, y la funcion modificadora, la unica que puede cambiar ese valor
  const [bgColor, setBgColor] = useState('#ffffff');

  // 2. Tu función original intacta
  function generateRandomColor() {
    const characters = '0123456789ABCDEF';
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += characters[Math.floor(Math.random() * 16)];
    }
    return hexColor;
  }

  // 3. La función que se ejecuta al hacer clic (reemplaza al addEventListener)
  const handleClick = () => {
    const nextColor = generateRandomColor();
    setBgColor(nextColor);
  };

  return (
    /* Pasamos el estado de forma dinámica con style={{ backgroundColor: ... }} */
    <div className="flipper-container" style={{ backgroundColor: bgColor }}>
      
      {/* Tu botón original con la propiedad onClick de React */}
      <button id="btn-color" onClick={handleClick}>
        Change color
      </button>

    </div>
  );
}

export default ColorFlipper;

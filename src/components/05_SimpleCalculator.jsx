import React, { useState } from 'react';
import './05_SimpleCalculator.css';

function SimpleCalculator() {
  // 1. Estados para los dos números y el resultado
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('-');

  // 2. Función de validación adaptada a los estados de React
  const validateFields = () => {
    if (num1 === "" || num2 === "") {
        alert("Please, enter both numbers.");
        return false;
    }
    return true;
  };

  // 3. Funciones para cada operación matemática
  const handleAdd = () => {
    if (!validateFields()) return;
    const total = parseFloat(num1) + parseFloat(num2);
    setResult(total);
  };

  const handleSubtract = () => {
    if (!validateFields()) return;
    const total = parseFloat(num1) - parseFloat(num2);
    setResult(total);
  };

  const handleMultiply = () => {
    if (!validateFields()) return;
    const total = parseFloat(num1) * parseFloat(num2);
    setResult(total);
  };

  const handleDivide = () => {
    if (!validateFields()) return;
    
    const n2 = parseFloat(num2);
    if (n2 === 0) {
        alert("Error: Cannot divide by zero.");
        return;
    }
    
    const total = parseFloat(num1) / n2;
    setResult(total);
  };

  return (
    <div className="calculator-container">
      <h2>Simple calculator</h2>

      {/* Controlamos el valor de los inputs con sus respectivos estados */}
      <div className="inputs-container">
        <input 
          type="number" 
          id="num1" 
          placeholder="First number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input 
          type="number" 
          id="num2" 
          placeholder="Second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>

      {/* Vinculamos cada botón a su función con la propiedad onClick */}
      <div className="buttons-container">
        <button id="btn-add" onClick={handleAdd}>Add</button>
        <button id="btn-subtract" onClick={handleSubtract}>Subtract</button>
        <button id="btn-multiply" onClick={handleMultiply}>Multiply</button>
        <button id="btn-divide" onClick={handleDivide}>Divide</button>
      </div>

      {/* Mostramos el resultado de manera reactiva en pantalla */}
      <div id="result">Result: {result}</div>
    </div>
  );
}

export default SimpleCalculator;

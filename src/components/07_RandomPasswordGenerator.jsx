import React, { useState } from 'react';
import './07_RandomPasswordGenerator.css';

function RandomPasswordGenerator() {
  // 1. Estados para controlar la longitud y la contraseña resultante
  const [length, setLength] = useState('');
  const [password, setPassword] = useState('Your password will appear here');

  // 2. Tu función original para generar la contraseña aleatoria
  function generateRandomPassword(passwordLength) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let generatedPassword = '';
    
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length); 
        generatedPassword += characters[randomIndex]; 
    }
    
    return generatedPassword;
  }

  // 3. Función del botón onClick que valida y actualiza el estado
  const handleGenerate = () => {
    if (length === "" || parseInt(length) < 4) {
        alert("Error: The length must be a number greater than or equal to 4.");
        return;
    }

    const passwordLength = parseInt(length);
    const newPassword = generateRandomPassword(passwordLength);
    setPassword(newPassword);
  };

  return (
    <div className="password-wrapper">
      <div className="container">
        <h2>Password Generator</h2>
        
        <label htmlFor="password-length">Password Length (Min: 4):</label>
        {/* En JSX cambiamos 'for' por 'htmlFor' y manejamos el valor con el estado */}
        <input 
          type="number" 
          id="password-length" 
          placeholder="Enter length..." 
          min="4"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        
        <button id="btn-generate" onClick={handleGenerate}>Generate Password</button>
        
        {/* Mostramos la contraseña directamente desde el estado */}
        <div id="password-result">{password}</div>
      </div>
    </div>
  );
}

export default RandomPasswordGenerator;

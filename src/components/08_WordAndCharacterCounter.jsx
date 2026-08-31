import React, { useState } from 'react';
import './08_WordAndCharacterCounter.css';

function WordAndCharacterCounter() {
  // 1. Un solo estado para rastrear todo el texto introducido
  const [text, setText] = useState('');

  // 2. Tu lógica original aplicada directamente al estado 'text'
  const cleanCharacters = text.replace(/[\s\n]/g, ''); 
  const totalCharacters = cleanCharacters.length; 

  const trimmedText = text.trim(); 
  let totalWords = 0; 
  
  if (trimmedText !== "") { 
      const wordsArray = trimmedText.split(/\s+/); 
      totalWords = wordsArray.length; 
  }

  return (
    <div className="counter-text-wrapper">
      <div className="container">
        <h2>Text Counter</h2>
        
        {/* Controlamos el textarea con value y onChange en React */}
        <textarea 
          id="text-input" 
          placeholder="Type or paste your paragraph here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        
        {/* Mostramos las estadísticas calculadas en tiempo real */}
        <div className="stats">
          <div>Words: <span id="word-count">{totalWords}</span></div>
          <div>Characters: <span id="character-count">{totalCharacters}</span></div>
        </div>
      </div>
    </div>
  );
}

export default WordAndCharacterCounter;

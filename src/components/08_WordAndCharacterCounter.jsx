import React, { useState } from 'react';
import './08_WordAndCharacterCounter.css';

function WordAndCharacterCounter() {
  const [text, setText] = useState('');

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
        
        <textarea 
          id="text-input" 
          placeholder="Type or paste your paragraph here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        
        <div className="stats">
          <div>Words: <span id="word-count">{totalWords}</span></div>
          <div>Characters: <span id="character-count">{totalCharacters}</span></div>
        </div>
      </div>
    </div>
  );
}

export default WordAndCharacterCounter;


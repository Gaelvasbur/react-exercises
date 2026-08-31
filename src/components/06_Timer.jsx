import React, { useState, useRef, useEffect } from 'react';
import './06_Timer.css';

function Timer() {
  // 1. Un solo estado para acumular el tiempo en segundos totales
  const [totalSeconds, setTotalSeconds] = useState(0);
  
  // 2. Usamos una referencia (useRef) para guardar el ID del intervalo sin perderlo entre renders
  const intervalRef = useRef(null);

  // 3. Función para iniciar el cronómetro (Reemplaza tu startButton listener)
  const handleStart = () => {
    if (intervalRef.current !== null) return; // Evita que se abran múltiples intervalos

    intervalRef.current = setInterval(() => {
      setTotalSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
  };

  // 4. Función para pausar el cronómetro (Reemplaza tu pauseButton listener)
  const handlePause = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // 5. Función para reiniciar el cronómetro (Reemplaza tu resetButton listener)
  const handleReset = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTotalSeconds(0);
  };

  // 6. Buena práctica en React: si el componente se destruye, limpiamos el intervalo de memoria
  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
    };
  }, []);

  // 7. Tu lógica original para descomponer el tiempo y formatear con ceros
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const h = hours < 10 ? '0' + hours : hours;
  const m = minutes < 10 ? '0' + minutes : minutes;
  const s = seconds < 10 ? '0' + seconds : seconds;

  return (
    <div className="timer-wrapper">
      <div className="container">
        <h2>Chronometer</h2>
        
        {/* Renderizado dinámico del tiempo formateado */}
        <div id="display">{`${h}:${m}:${s}`}</div>
        
        <div className="controls">
          <button id="btn-start" onClick={handleStart}>Start</button>
          <button id="btn-pause" onClick={handlePause}>Pause</button>
          <button id="btn-reset" onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Timer;

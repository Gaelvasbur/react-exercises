import React, { useState, useRef, useEffect } from 'react';
import './06_Timer.css';

function Timer() {
  const [totalSeconds, setTotalSeconds] = useState(0);
  
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTotalSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
  };

  const handlePause = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleReset = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTotalSeconds(0);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
    };
  }, []);

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


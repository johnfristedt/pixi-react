import './App.css';

import React, { useEffect, useRef } from 'react';

import game from './game/game';

function App() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvas)
      game.start(canvas.current);
  }, [canvas])

  return (
    <>
      <canvas id="view" ref={canvas}></canvas>
    </>
  );
}

export default App;

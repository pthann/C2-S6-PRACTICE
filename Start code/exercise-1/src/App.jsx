import React, { useState } from "react";
import "./index.css"; 

function App() {
  
  const [isRaining, setIsRaining] = useState(false);

  function onSunClick() {
    setIsRaining(false);
  }

  function onRainClick() {
    setIsRaining(true);
  }

  function getTitle() {
    return isRaining ? "Rainy time" : "Sunny time";
  }

  function getBackgroundColor() {
    return isRaining ? "rainy" : "sunny";
  }

  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny time</button>
      <button onClick={onRainClick}>Rainy time</button>
    </main>
  );
}

export default App;

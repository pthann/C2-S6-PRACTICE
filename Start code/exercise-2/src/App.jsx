import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleKeyPress = (event) => {
    console.log("Key pressed:", event.key);
    setText(event.target.value);
  };

  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text!</label>
      <input type="text" value={text} onChange={handleKeyPress} />

      <p>
        <label>Here is the text in upper case</label>
        <input type="text" value={text.toUpperCase()} disabled />
      </p>
    </main>
  );
}

export default App;

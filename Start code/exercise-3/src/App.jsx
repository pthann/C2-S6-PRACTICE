import React, { useState } from "react";

function App() {
   /* You will need to use many state to keep the inut values and other needs */
   /* You will need some function to handle the key pressed and button events */
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);

  const onA = (event) => {
    setValueA(event.target.value);
  };

  const onB = (event) => {
    setValueB(event.target.value);
  };

  const isNumber = (text) => {
    return !isNaN(text) && text.trim() !== "";
  };
  const onCompute = () => {
    if (isNumber(valueA) && isNumber(valueB)) {
      const sum = parseFloat(valueA) + parseFloat(valueB);
      setResult(sum);
      setIsError(false);
    } else {
      setResult("Error: A and B shall be numbers");
      setIsError(true);
    }
  };

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute button is clicked, this input displays the sum of the 2 numbers, or the error message in RED */}
      <input
        disabled
        value={result}
        style={{ color: isError ? "red" : "black" }}
      />
      <button onClick={onCompute}>Compute</button>
    </main>
  );
}

export default App;


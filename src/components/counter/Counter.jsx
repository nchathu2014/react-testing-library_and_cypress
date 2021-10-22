import React, { useState } from "react";
import "./counter.css";

export default function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  const [inputBoxValue, setInputBoxValue] = useState(1);

  const handleIncrement = () => {
    setCounterValue(counterValue + inputBoxValue);
  };

  return (
    <div>
      <h1 data-testid="header">My Counter</h1>
      <h3
        data-testid="counter-label"
        className={
          counterValue > 100 ? "green" : counterValue < -100 ? "red" : ""
        }
      >
        {counterValue}
      </h3>

      <button
        className="btn btn-inc"
        data-testid="btn-decrement"
        onClick={() => setCounterValue(counterValue - inputBoxValue)}
      >
        -
      </button>
      <input
        data-testid="input-box"
        type="number"
        className="text-center"
        value={inputBoxValue}
        onChange={(event) => setInputBoxValue(parseInt(event.target.value))}
      />
      <button
        className="btn btn-dec"
        data-testid="btn-increment"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
}

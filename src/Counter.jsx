import React from "react";
import { useState } from "react";

function Counter() {
  // const counterState = useState(0);
  // const count = counterState[0];
  // const setCount = counterState[1];
  //applying destructuring for upper statements
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <p>this count is {count}</p>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </>
  );
}

export default Counter;

import { useState } from "react";

// The prop type is inlined.
const CounterB = ({ start = 0 }: { start?: number }) => {
  const [count, setCount] = useState(start);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <p>Count: {count}</p>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </>
  );
};

export default CounterB;

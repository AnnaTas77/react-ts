import { useState } from "react";

// No added TypeScript syntax here -- the prop type is inferred from the default value!
const CounterA = ({ start = 0 }) => {
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

export default CounterA;

import { useState } from "react";

// An interface for the prop types...
interface Props {
  start?: number;
}

// ...that is used on the following line.
const CounterC = ({ start = 0 }: Props) => {
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

export default CounterC;

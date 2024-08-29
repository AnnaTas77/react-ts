import { useState } from "react";

interface Props {
  start?: number;
}

const CounterD = ({ start = 0 }: Props) => {
  // You can optionally be more explicit here with a generic type.
  const [count, setCount] = useState<number>(start);

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

export default CounterD;

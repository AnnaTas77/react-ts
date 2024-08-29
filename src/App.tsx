import CounterA from "./CounterA.tsx";
import CounterB from "./CounterB.tsx";
import CounterC from "./CounterC.tsx";
import CounterD from "./CounterD.tsx";

const App = () => {
  return (
    <>
      <CounterA start={5} />
      <CounterB start={10} />
      <CounterC start={15} />
      <CounterD start={20} />
    </>
  );
};

export default App;

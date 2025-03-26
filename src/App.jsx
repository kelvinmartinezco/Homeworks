import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./counterSlice";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const stack = useSelector((state) => state.counter.stack);
  const [incrementValue, setIncrementValue] = useState(0);
  const [stackValue, setStackValue] = useState("");

  // Sincronizar el valor del input con el valor del counter
  useEffect(() => {
    setStackValue(counter.toString());
  }, [counter]);

  return (
    <div>
      <h1>Redux Challenge 10</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(counterActions.increment())}>Incremento</button>
      <button onClick={() => dispatch(counterActions.decrement())}>Decremento</button>
      <input value={incrementValue} onChange={(e) => setIncrementValue(Number(e.target.value))} />
      <button onClick={() => dispatch(counterActions.incrementBy(incrementValue))}>Incrementar valor</button>
      
      <h2>Stack</h2>
      <button onClick={() => dispatch(counterActions.push(stackValue))}>Push</button>
      <button onClick={() => dispatch(counterActions.pop())}>Pop</button>
      <ul>
        {stack.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


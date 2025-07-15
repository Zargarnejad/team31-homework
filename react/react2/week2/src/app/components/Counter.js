"use client";
import { useCounter } from "../contexts/CounterContext";

export default function Counter() {
  const { count, dispatch } = useCounter();

  return (
    <div className="container">
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment (+)</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement (-)</button>
    </div>
  );
}

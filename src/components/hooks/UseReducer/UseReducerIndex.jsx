import { useReducer } from "react";

export const UseReducerIndex = () => {
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
    } else if (action.type === "DECREMENT" && state > 0) {
      return state - 1;
    } else {
      return 0;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <section
      className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-amber-200  text-black`}>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decreament
      </button>
    </section>
  );
};

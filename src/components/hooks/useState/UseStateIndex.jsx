import { useState } from "react";
import cssModule from "../Hooks.module.css";

export const UseStateHookCounter = () => {
  const [stateHook, setUseStateHook] = useState(0);

  return (
    <div className={cssModule["card"]}>
      <h1 className={cssModule["card-heading"]}>useState Hook!</h1>
      <br />
      <p>Count:- {stateHook}</p>
      <button onClick={() => setUseStateHook(stateHook + 1)}>Increment</button>
    </div>
  );
};

export const UseStateChallenge = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleSetStep(e) {
    setStep(Number(e.target.value));
  }

  function handleSetIncrement() {
    if (step != 0 && count < 100 && count + step <= 100) {
      var newIncCount = count + step;
      setCount(Number(newIncCount));
    }
  }

  function handleSetDecrement() {
    if (step != 0 && count != 0 && count - step >= 0) {
      var newDecCount = count - step;
      setCount(Number(newDecCount));
    }
  }

  function handleReset() {
    setCount(0);
  }
  // console.log(count);
  // console.log(step);

  return (
    <div className={cssModule["card"]}>
      <h1 className={cssModule["card-heading"]}>useState Challenge</h1>
      <br />
      <p>
        Count:
        <span style={{ color: "#6fb5f7", fontWeight: "bold" }}> {count}</span>
        <br />
        Step:
        <input
          type="number"
          autoComplete="off"
          value={step}
          onChange={(evt) => handleSetStep(evt)}></input>
        <br />
        <button onClick={() => handleSetIncrement()} disabled={count == 100}>
          Increment
        </button>
        <button onClick={() => handleSetDecrement()} disabled={count == 0}>
          Decrement
        </button>
        <button onClick={() => handleReset()}>Reset</button>
      </p>
    </div>
  );
};

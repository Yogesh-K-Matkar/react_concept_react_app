import { useEffect, useState } from "react";
import cssModule from "../Index.module.css";

export const UseEffectChallenge = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  useEffect(() => {
    console.log("Name is: " + name);
  }, [name]);

  return (
    <div className={cssModule["container"]}>
      <h1 className={cssModule["card-heading"]}>useEffect Challenge!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Name: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete="off"
      />
    </div>
  );
};

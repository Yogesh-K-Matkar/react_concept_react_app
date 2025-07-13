import { useEffect, useState } from "react";
import cssModule from "../Index.module.css";

export const UseEffectCleanup = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Current Odometer: " + count);

    const timer = setInterval(() => {
      setCount((prevStateValue) => prevStateValue + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={cssModule["container"]}>
      <h1 className={cssModule["card-heading"]}>useEffect Cleanup!</h1>
      <div className={cssModule["effect-container"]}>
        <p>My Subscribers on Youtube</p>
        <div id="odometer" className={cssModule["odometer"]}>
          {count}
        </div>
        <h3 className={cssModule["title"]}>
          Subscribers <br /> Realtime Counter
        </h3>
      </div>
    </div>
  );
};

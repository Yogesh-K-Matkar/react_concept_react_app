import { useEffect, useState } from "react";
import cssModule from "../Index.module.css";

export const UseEffectIndex = () => {
  return (
    <div className={cssModule["container"]}>
      <h1 className={cssModule["card-heading"]}>useEffect Hook!</h1>
      <UserEffectEx1 />
      <UserEffectEx2 />
      <UserEffectEx3 />
    </div>
  );
};

const UserEffectEx1 = () => {
  useEffect(() => {
    console.log("useEffect Example 1");
  }, []);

  return <></>;
};

const UserEffectEx2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect Example 2 :-  ", count);

    // return () => {
    //   setCount(0);
    // };
  }, [count]);

  return (
    <>
      <p>Count:- {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

const UserEffectEx3 = () => {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log("Current Date:-" + date);

    setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    });
  }, [date]);

  return (
    <>
      <p>Date:- {date}</p>
    </>
  );
};

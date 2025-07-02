import { useState } from "react";
import { MemoCounts } from "./MemoCount";

/*
Notes:-

  1 . Memo:-(HOC-Higher Order Component)- Prevent unnecessary rendering of component due to parent component rendering by wrapping child component

	    Syntax:- export child components as below with memo hook wrap around

             export default memo(Childcomponent);

*/

export const ReactMemoIndex = () => {
  const [count, setCount] = useState(0);

  return (
    <section
      className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-amber-200  text-black`}>
      <div className="p-4 h-52 font-display tracking-wider flex flex-col justify-center items-center">
        <h1>{count}</h1>
        <button
          className="btn bg-cyan-500 p-1 px-3"
          onClick={() => setCount(() => count + 1)}>
          Increment
        </button>
      </div>
      <MemoCounts />
    </section>
  );
};

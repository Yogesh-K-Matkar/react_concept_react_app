import { useState } from "react";
import "./EV.css";

/*Notes:-

1. Values that need to be render in jsx code after update then need to use concept of State to maintain value on multiple updates.
2. State made of 2 components one is State Varibale and another is setter function that update State Variable.
   e.g. const [count,setCount]=useState(0)
3. To maintain value on multiple render of jsx useState function concepts comes in that set initial value in State Variable.
4. Any function start with word 'use' then that function in React known as concept call hooks function.
5. Component get render when State Variables define within it get Updated then all Child Components defined within it is also get render.


*/

export const State = () => {
  //   let value = 0;

  //   function handleButtonClick() {
  //     value++;
  //     console.log(value);
  //   }

  //console.log("Parent Component Rendered");

  const [count, setCount] = useState(0);

  function handleButtonClick() {
    setCount((count) => {
      return count + 1;
    });
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">State</h1>
      <section className="main-div">
        <h1 className="text-3xl font-bold underline">{count}</h1>
        <button onClick={handleButtonClick}>Increment</button>
      </section>
      <ChildComponent pcount={count} />
    </>
  );
};

const ChildComponent = (props) => {
  const { pcount } = props;

  //console.log("Child Component Rendered");
  return (
    <>
      <h1 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        Child Component - {pcount}
      </h1>
    </>
  );
};

export const SiblingNoState = () => {
  //console.log("Sibling Component Rendered");
  return (
    <>
      <h1 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        Sibling Component
      </h1>
    </>
  );
};

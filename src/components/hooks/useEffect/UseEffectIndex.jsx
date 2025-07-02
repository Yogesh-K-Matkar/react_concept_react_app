import { useEffect, useState } from "react";
import cssModule from "../Index.module.css";

/* 
Notes:-

B Logical Hooks:-

1. useEffect:- 
        Secondary logic performed based on changes occur in dependencies such as StateVariable value change.
        
        Syntax:- useEffect(
 			                     ()=>{
				                          //Your side effect code				                               
                                  return Value;                               
  
                                  return ()=>{
					                                      //Cleanup code	
					                                    };
				                        },
                                [dependencies]);

*/

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
    <section
      className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-amber-200  text-black`}>
      <h1>useEffect hook!</h1>
      <div className={`justify-center items-center`}>
        <p>Count:- {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </section>
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

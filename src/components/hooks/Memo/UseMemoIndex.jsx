import { useMemo, useState } from "react";

/*
Notes:-

B Logical Hooks:-

  2. useMemo:- This hook is used to skip un-necessary value re-generating if value is already in cached, which will
               reduce delay occur to minimal in getting actual result from other necessary components


	   Syntax:- Syntax similar to useEffect hook

         const memoizedValue=useMemo(
                               	     ()=>{
                                     	     //Your code execute base on value in dependencies changes				                               
                                			     return Value;     
                                       	 },
                                       	 [dependencies]);

*/

const CPUHighConsumtionLogic = () => {
  //Calculation function
  const sum = () => {
    console.log("Calculating Sum...");

    let i = 0;
    for (i = 0; i < 10000000; i++) {
      i += 1;
    }
    return i;
  };

  //const total = sum();

  const total = useMemo(() => sum(), []);

  return <>Sum:{total}</>;
};

export const UseMemoIndex = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <section
        className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-amber-200  text-black`}>
        <h1>Using useMemo hook!</h1>
        <div className={`justify-center items-center`}>
          <CPUHighConsumtionLogic />
          <br />
          <button onClick={() => setCount(count + 1)}>Re-render Parent</button>
          <p>Parent re-renders: {count}</p>
        </div>
      </section>
    </>
  );
};

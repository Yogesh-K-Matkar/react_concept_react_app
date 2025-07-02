import { memo, useCallback, useState } from "react";

/*
Notes:-

B Logical Hooks:-

  3. useCallBack:- This hook is used to skip un-necessary function re-execution if value is already in cached, which will
                    reduce delay occur to minimal in getting actual result from other necessary components



	   Syntax:- Syntax similar to useEffect hook

                 const memoizedValue=useCallBack(
                                  	     ()=>{
                                             	     //Your code execute base on value in dependencies changes				                               
                               			     return Value;     
                                            	 },
                                            	 [dependencies]);


*/

export const UseCallbackIndex = () => {
  const [count, setCount] = useState(0);

  //const increment = () => setCount(count + 1);
  const increment = useCallback(() => {
    console.log("Increment inside");
    setCount((prevState) => prevState + 1);
  }, []);

  //const decrement = () =>setCount(count - 1);
  const decrement = useCallback(() => {
    console.log("Decrement inside");
    setCount((prevState) => prevState - 1);
  }, []);

  return (
    <div
      className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-amber-200  text-black`}>
      <h1>Using useCallback hook!</h1>
      <div>
        <h1 className="mb-4">Count: {count}</h1>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
    </div>
  );
};

const Button = memo(({ onClick, children }) => {
  //const { onClick, children } = props;

  console.log(`Rendering button ${children}`);

  return (
    <button
      className={`text-black mb-4 py-2 px-5 ${
        children === "Increment" ? "!bg-green-400" : "!bg-red-400"
      }`}
      onClick={onClick}>
      {children}
    </button>
  );
});

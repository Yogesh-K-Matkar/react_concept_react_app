import { useReducer } from "react";

/*
Notes:-

A. State Management Hook:-

5 . useReducer:- 
    This hook is similar to useState hook, but for entry value of each control we have to create separate useState hook,
    but useReducer provides action parameter for reducer function so based on action type different state value can be return instead of creating             	separate useReducer function for each control similar to useState hook concept.

       Syntax:- 

           const reducer=(state, action)=>{
                  if(action.type=="increment"){
                   return state+1;
		              }
                 else if(action.type=="decrement"){
                   return state-1;
		              }
           }

           const [state,dispatch]=useReducer(reducer,0)

          --> dispatch function with type object which internal calls reducer function and set type parameter to action parameter based on which 
              for different action can perform different logic and return new state value

              
*/

export const UseReducerIndex = () => {
  const initialState = {
    count: 0,
    inc: 2,
    dec: 2,
  };

  const myReducer = (state, action) => {
    console.log(state, action);

    // if (action.type === "INCREMENT") {
    //   return (state = state + 1);
    // } else if (action.type === "DECREMENT" && state > 0) {
    //   return (state = state - 1);
    // } else if (action.type === "RESET") {
    //   return (state = 0);
    // }
    //Replace if..else with switch conditional statement

    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + state.inc };

      case "DECREMENT":
        return {
          ...state,
          count: state.count - (state.count - state.dec < 0 ? 0 : state.dec),
        };

      case "RESET":
        return { ...state, count: 0 };

      default:
        return state;
    }
  };

  const [state, myDispatch] = useReducer(myReducer, initialState);

  return (
    <section
      className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-amber-200  text-black`}
    >
      <h1>Using useReducer hook!</h1>
      <h1>{state.count}</h1>
      <button onClick={() => myDispatch({ type: "INCREMENT" })}>
        Increment
      </button>
      <button onClick={() => myDispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
      <button onClick={() => myDispatch({ type: "RESET" })}>Reset</button>
    </section>
  );
};

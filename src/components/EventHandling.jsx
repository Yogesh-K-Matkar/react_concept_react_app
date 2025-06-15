import "./EV.css";

/* Notes:-

1. Event Handler in js such as onClick,onChange,onSubmit, etc
   which then call Syntectic Event Handler Function in React should be written as function name 
   such as handleClick,handleChange,handleSubmit, etc
   This know as Syntectic Event Handler Function.

2. Type Of Function:-
  1. Named Function is only calling function  name not function.
      e.g. onClick={handleButtonClick} (Not like this onClick={handleButtonClick()}) 
  2. Arrow Function with event as parameter to get Syntectic Event object
      e.g. onClick={(event)=>handleButtonClick(event)}
  3. Inline Function With Syntectic Event object
      e.g. onClick={(event) => console.log(event)}
  4. Inline Arrow Nromal Function
      e.g. onClick={() =>{ console.log("Hi")}}
  5. Arrow function passing parameters/arguments
      e.g. onClick={(event) => handleButtonClick3(event, "Raju")}>} 

3. Event Handler passing as props can used in concept such as From Handling,User Intraction,State Management,Callback Function.

 */

export const EventHandling = () => {
  // function handleButtonClick() {
  //   console.log("Hey I am onClick Event");
  // }

  const handleButtonClick1 = () => {
    console.log("Hey I am onClick Event Named Function");
  };

  const handleButtonClick2 = (event, msg) => {
    console.log(event);
    console.log(event.target);
    console.log(event.type);
    console.log(msg);
  };

  const handleButtonClick3 = (event, user) => {
    console.log(`Hey ${user}, Welcome`);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Event Handling</h1>
      <div className="card">
        {/*1. Named Function*/}
        <button
          style={{ backgroundColor: "#f7dc6f" }}
          onClick={handleButtonClick1}
        >
          Named Function
        </button>
        <br />
        <button
          style={{ backgroundColor: "#f7dc6f" }}
          onClick={(event) =>
            handleButtonClick2(
              event,
              "Hey I am onClick Event  Arrow Function with Syntectic event parameter"
            )
          }
        >
          Inline Arrow Function with Syntectic event parameter
        </button>
        <button
          style={{ backgroundColor: "#f7dc6f" }}
          onClick={(event) => console.log(event)}
        >
          Inline Function
        </button>
        <button
          style={{ backgroundColor: "#f7dc6f" }}
          onClick={() =>
            console.log("Hey I am onClick Event  Inline Arrow Function")
          }
        >
          Inline Arrow Function
        </button>
        <button
          style={{ backgroundColor: "#f7dc6f" }}
          onClick={(event) => handleButtonClick3(event, "Raju")}
        >
          Arrow Function passing Syntectic event parameter and dynamic parameter
        </button>
      </div>
    </>
  );
};

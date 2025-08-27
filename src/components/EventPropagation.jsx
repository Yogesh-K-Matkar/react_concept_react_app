import "./EV.css";

/* Notes:-

1. Event Propagation, propagate means moving & Event Propagation means moving each element and occur event until reach target event.
   
   Event Propagation has 3 point (Capture,Target & Bubbling)
   
   Type of Event Propagation:-

   1. Event Capture means propagate/moving from Parent Element to Traget Action Element and triiger all occur event fuction in path while moving.
   2. Event Bubbling means propagate/moving from Target Action Element to Parent Element and triiger all occur event fuction in path while moving.

   But to avoid unwanted trigger of event function other then Target Action Event Function we have to use
   e.g. event.stopPropagation() -- stop after trigger single target event.
*/

export const EventPropagation = () => {
  function handleGrandParentClick() {
    console.log("Grand Parent Clicked");
  }
  function handleParentClick() {
    console.log("Parent Clicked");
  }
  function handleChildClick(event) {
    //console.log(event);
    console.log("Child Clicked");
    event.stopPropagation();
  }

  return (
    <>
      <span align="left" className="text-3xl font-bold underline">
        Event Propagation
      </span>
      <section className="main-div">
        <h1>
          <b className="text-3xl font-bold underline" style={{ color: "blue" }}>
            Event Bubbling
          </b>
        </h1>
        <p>
          Move from child to parent element call all event occure while moving.
          To stop event bubbling then call e.g. event.stopPropagation() on
          target event call.
        </p>
        <div className="g-div" onClick={handleGrandParentClick}>
          <div className="p-div" onClick={handleParentClick}>
            <div className="c-div" onClick={(event) => handleChildClick(event)}>
              Child Div
            </div>
          </div>
        </div>
      </section>

      <section className="main-div">
        <h1>
          <b className="text-3xl font-bold underline" style={{ color: "blue" }}>
            Event Capturing
          </b>
        </h1>
        <p>
          Move from parent to child target element all event occure while
          moving.
        </p>
        <div className="g-div" onClickCapture={handleGrandParentClick}>
          <div className="p-div" onClickCapture={handleParentClick}>
            <div
              className="c-div"
              onClickCapture={(event) => handleChildClick(event)}
            >
              Child Div
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

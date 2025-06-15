import { useState } from "react";
import "./EV.css";
import styled from "styled-components";

/* Notes:-

1. LiftingStateUp mean when state is defined in childre and same is need to children at same node level,
   so need to move state to its parent where both childs is calling.This can be done through passing function as prop to child 
   where value from child is pass to parent via parent function passed as prop to set State in parent.
   Then same state is pass as prop to another child that require same state value.

   That means State is common to multiple state at same level child component.

*/

export const LiftStateUp = () => {
  const [inputValue, setInputValue] = useState("");

  function handlerSetInputValue(value) {
    setInputValue(value);
    //console.log(inputValue);
  }

  return (
    <>
      <InputComponent
        pInputValue={inputValue}
        pSetInputValue={handlerSetInputValue}
      />
      <DisplayComponent pInputValue={inputValue} />
    </>
  );
};

const InputComponent = (props) => {
  const { pInputValue, pSetInputValue } = props;

  function handlerChildSetInputValue(event) {
    pSetInputValue(event.target.value);
  }

  const NameInput = styled.input({
    width: "400px",
    padding: "5px",
    border: "1px solid #ccc",
    margin: "10px",
  });

  return (
    <>
      <NameInput
        type="text"
        placeholder="Enter your name"
        value={pInputValue}
        onChange={(event) => handlerChildSetInputValue(event)}
      />
    </>
  );
};

const DisplayComponent = (props) => {
  const { pInputValue } = props;
  return <p>The current input value is: {pInputValue}</p>;
};

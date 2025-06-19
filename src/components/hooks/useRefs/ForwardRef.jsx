import { forwardRef, useRef } from "react";
import cssModules from "../Hooks.module.css";

export const ForwardRef = () => {
  const username = useRef(null);
  const password = useRef(null);

  const uname = useRef(null);
  const upassword = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(username.current.value, password.current.value);
    console.log(uname.current.value, upassword.current.value);
  };

  return (
    <form onSubmit={(evt) => handleFormSubmit(evt)}>
      <div className={cssModules["container"]}>
        <div>
          <h1 className={cssModules["title"]}>
            Login Form (Using forwardRef function Passing ref To Child
            Component)
          </h1>
          <BeforeReact19Input label="username" ref={username} />
          <BeforeReact19Input label="password" ref={password} />
          <h1 className={cssModules["title"]}>
            Login Form (Get ref attribute from props in Child Component)
          </h1>
          <AfterReact19Input label="username" ref={uname} />
          <AfterReact19Input label="password" ref={upassword} />
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

//Before React v19 release need to use forwardRef function to pass ref value from parent to child components
//without passing props, states and without rendering of components

const BeforeReact19Input = forwardRef((props, ref) => {
  const { label } = props;

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} name={label} ref={ref} />;
    </div>
  );
});

//After React v19 release no need to use forwardRef function to pass ref value from parent to child components
//instead ref is retrived from props as attribute

const AfterReact19Input = (props) => {
  const { label, ref } = props;

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} name={label} ref={ref} />;
    </div>
  );
};

import { useRef } from "react";
import cssModules from "../Hooks.module.css";

/*
Notes:-

State Management Hook:-

2 . useRefs:- 
    useRefs hook is used when controls value are not tightly bind by any useState hook state variable mean uncontrolled control.
    To work on uncontroller stateless form or component then for storing uncontrolled control value useRefs hook is used.

    In vanilla js ,we are accessing value of control using below syntax
        const inputcontrol=document.getElementById("#controlId");

    But in react above method is not prefer for accessing control so instead in React useRefs hook is used to access control.
 		
    Syntax:-  const username=useRef(null);

         <input type="text" id="username" ref={username}>

        ref attribute on input field will bind with constant variable <username> to stored value enter in input field.


        Passing ref from Parent Component to Child Component 
        --Before React v19 release forwardRef function (props,ref)=>{} is used 
        --After React v19 release ref can be access as props.



*/

export const UseRefsIndex = () => {
  //   const lusername = document.getElementById("lusername");
  //   const lpassword = document.getElementById("lpasword");

  //   const [logindetails, setLoginDetails] = useState({
  //     username: "",
  //     password: "",
  //   });

  const username = useRef(null);
  const password = useRef(null);

  function handleFormSubmit(e) {
    e.preventDefault();

    console.log(e);
    console.log(username, password);
    console.log(username.current.value, password.current.value);

    // setLoginDetails((prevState) => ({
    //   ...prevState,
    //   username: username.current.value,
    //   password: password.current.value,
    // }));
  }

  //console.log(logindetails);

  return (
    <form onSubmit={(evt) => handleFormSubmit(evt)}>
      <div className={cssModules["container"]}>
        <h1 className={cssModules["title"]}>Login Form (Using UseRefs)</h1>
        <div>
          <input id="lusername" type="text" ref={username} />
          <input id="lpassword" type="password" ref={password} />
          <button type="submit">Login</button>
        </div>
      </div>
    </form>
  );
};

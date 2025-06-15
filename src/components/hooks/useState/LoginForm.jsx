import { useState } from "react";
import cssModules from "../Index.module.css";

export const LoginForm = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (evt) => {
    //console.log(evt.target);

    const { name, value } = evt.target;

    setLoginDetails((prevStateVal) => ({ ...prevStateVal, [name]: value }));
  };

  const handleLoginDetails = (evt) => {
    //console.log(evt.target);

    evt.preventDefault();

    console.log(loginDetails);
  };

  return (
    <form onSubmit={(e) => handleLoginDetails(e)}>
      <div className={cssModules["container"]}>
        <h1 className={cssModules["title"]}>Login Form</h1>
        <div className={cssModules["card"]}>
          <label htmlFor="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            value={loginDetails.username}
            onChange={(e) => handleInputChange(e)}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            required
            autoComplete="off"
            value={loginDetails.password}
            onChange={(e) => handleInputChange(e)}
          />

          <button type="submit">Login</button>
        </div>
      </div>
    </form>
  );
};

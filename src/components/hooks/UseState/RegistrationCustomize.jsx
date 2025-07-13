import { useState } from "react";
import cssModule from "../Index.module.css";

export const RegistrationFormCustomize = () => {
  const [objRegistrationForm, setRegistrationForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleInputChange = (evt) => {
    console.log({ ...evt.target });
    const { name, value } = evt.target;

    // console.log(name);
    // console.log(value);

    setRegistrationForm((prevStateVal) => ({ ...prevStateVal, [name]: value }));
  };

  const hanldeRegistrationDetails = (evt) => {
    evt.preventDefault();

    console.log(objRegistrationForm);
  };

  return (
    <>
      <section style={{ textAlign: "center", marginTop: "30px" }}>
        <p>
          Hello, my name is
          <span>
            {objRegistrationForm.firstName} {objRegistrationForm.lastName}
          </span>
          . My email address is<span>{objRegistrationForm.email}</span>and my
          phone number is
          <span>{objRegistrationForm.phone}</span>
        </p>
      </section>
      <form onSubmit={(e) => hanldeRegistrationDetails(e)}>
        <div className={cssModule["container"]}>
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter firstName"
            required
            value={objRegistrationForm.firstName}
            onChange={(e) => handleInputChange(e)}
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter lastName"
            required
            value={objRegistrationForm.lastName}
            onChange={(e) => handleInputChange(e)}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            required
            value={objRegistrationForm.email}
            onChange={(e) => handleInputChange(e)}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            value={objRegistrationForm.password}
            onChange={(e) => handleInputChange(e)}
          />

          <label htmlFor="phone">
            <b>Phone Number</b>
          </label>
          <input
            type="phone"
            name="phone"
            placeholder="1234567890"
            required
            value={objRegistrationForm.phone}
            onChange={(e) => handleInputChange(e)}
          />

          <p>
            By creating an account you agree to our
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
          </p>

          <div className="clearfix">
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

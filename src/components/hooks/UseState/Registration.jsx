import { useState } from "react";
import cssModule from "../Index.module.css";

export const RegistrationForm = () => {
  // This concept of multiple useState is ok till 3 useState not more then that
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleInputChange = (evt) => {
    //console.log({ ...evt.target });
    const { name, value } = evt.target;

    // console.log(name);
    // console.log(value);

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "phone":
        setPhone(value);
        break;
    }
  };

  const hanldeRegistrationDetails = (evt) => {
    evt.preventDefault();

    const registrationDetails = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Password: password,
      Phone: phone,
    };

    console.log(registrationDetails);
  };

  return (
    <>
      <section style={{ textAlign: "center", marginTop: "30px" }}>
        <p>
          Hello, my name is
          <span>
            {firstName} {lastName}
          </span>
          . My email address is<span>{email}</span>and my phone number is
          <span>{phone}</span>
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
            value={firstName}
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
            value={lastName}
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
            value={email}
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
            value={password}
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
            value={phone}
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

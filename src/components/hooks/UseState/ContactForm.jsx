import { useState } from "react";
import cssModules from "../Index.module.css";

export const ContactForm = () => {
  const [contactDetails, setContactDetails] = useState({
    username: "",
    email: "",
    message: "",
  });

  function handleInputChange(evt) {
    const { name, value } = evt.target;

    setContactDetails((prevStateVal) => ({ ...prevStateVal, [name]: value }));
  }

  function handleContactDetails(evt) {
    evt.preventDefault();

    console.log(contactDetails);
  }

  return (
    <form
      onSubmit={(e) => {
        handleContactDetails(e);
      }}
    >
      <div className={cssModules["container"]}>
        <h1 className={cssModules["title"]}>Contact Form</h1>
        <div className={cssModules["card"]}>
          <label htmlFor="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            value={contactDetails.username}
            onChange={(e) => handleInputChange(e)}
          />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            name="email"
            required
            autoComplete="off"
            value={contactDetails.email}
            onChange={(e) => handleInputChange(e)}
          />
          <label htmlFor="message">
            <b>Message</b>
          </label>
          <textarea
            type="text"
            name="message"
            required
            autoComplete="off"
            value={contactDetails.message}
            onChange={(e) => handleInputChange(e)}
            rows="6"
          />
          <button type="submit">Send Message</button>
        </div>
      </div>
    </form>
  );
};

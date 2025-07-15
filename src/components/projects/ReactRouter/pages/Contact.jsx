import { Form } from "react-router-dom";

import contact from "../assets/images/contact.png";

/* Notes:-

1. Form Submission:-
    React Router provides a way to handle form submissions using the `action` prop in the route configuration. This allows you to handle form data submission and processing.

    Syntax:-
    In the route configuration, you can define an `action` function that will be called when the form is submitted.

    Example:
    In route configuration, action prop is used to handle form submission and process the form data as below.

    ```jsx
    { path: "/contact", element: <Contact />, action: submitContactFormData}.
    ```

    Then, passing {request} object as prop to function where formData() function retrun response which is then converted in object format through object.fromEntries() which further used for processing array like structure data to convert to object format.
*/

export const submitContactFormData = async ({ request }) => {
  try {
    const resp = await request.formData();

    console.log(resp);

    const data = Object.fromEntries(resp);

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const Contact = () => {
  return (
    <>
      <section className="container">
        <h2 className="section-common--heading">Contact Us</h2>
        <p className="section-common--subheading">
          Get in touch with us. We are always here help you.
        </p>
        <div className="section-contact">
          <div className="grid grid-two--cols">
            <div className="contact-content">
              <Form method="POST" action="/contact">
                <div className="grid grid-two-cols mb-3">
                  <div>
                    <label htmlFor="username">Full Name</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="off"
                      placeholder="Enter Full Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      placeholder="abc@xyz.com"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                      placeholder="We are always here to help you."
                    />
                  </div>

                  <div className="mt-3">
                    <button type="submit" className="btn contact-btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </Form>
            </div>
            <div className="contact-image">
              <figure>
                <img
                  src={contact}
                  alt="contact pic"
                  className="contact-image"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

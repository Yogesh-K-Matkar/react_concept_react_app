const Contact = () => {
  const handleFormSubmitContact = (formData) => {
    console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());

    console.log(formInputData);

    return <></>;
  };

  return (
    <section className="section-contact">
      <h1 className="container-title">Contact Page</h1>
      <div className="contact-wrapper container">
        <form action={handleFormSubmitContact}>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            placeholder="Enter your name"
            className="form-control"
          />
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            placeholder="Enter your email"
            className="form-control"
          />
          <textarea
            name="message"
            required
            autoComplete="off"
            placeholder="Enter your message"
            rows="10"
          />
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

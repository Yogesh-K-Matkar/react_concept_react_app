export const Accordion = (props) => {
  const { faqData, isActive, handleToggle } = props;
  const { id, question, answer } = faqData;

  const handleButton = (ev, id) => {
    ev.preventDefault();
    try {
      handleToggle(id);
    } catch (error) {
      console.error("Error Message ", error.message);
      console.error("Error Status ", error.response.status);
      console.error("Error Data ", error.response.data);
    }
  };
  return (
    <>
      <li>
        <div className="accordion-grid">
          <p>{question}</p>
          <button
            className={isActive ? "active-btn" : ""}
            onClick={(ev) => handleButton(ev, id)}>
            {isActive ? "Close" : "Show"}
          </button>
        </div>
        <p>{isActive ? answer : ""}</p>
      </li>
    </>
  );
};

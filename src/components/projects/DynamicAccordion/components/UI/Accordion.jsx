export const Accordion = (props) => {
  const { faqData, isActiveTab, handleToggleTab } = props;
  const { id, question, answer } = faqData;

  function handleButton(ev, id) {
    ev.preventDefault();
    try {
      handleToggleTab(id);
    } catch (error) {
      console.error("Error Message ", error.message);
      console.error("Error Status ", error.response.status);
      console.error("Error Data ", error.response.data);
    }
  }
  return (
    <li>
      <div className="accordion-grid">
        <p>{question}</p>
        <button
          className={isActiveTab ? "active-btn" : ""}
          onClick={(ev) => handleButton(ev, id)}
        >
          {isActiveTab ? "Close" : "Show"}
        </button>
      </div>
      <p>{isActiveTab ? answer : ""}</p>
    </li>
  );
};

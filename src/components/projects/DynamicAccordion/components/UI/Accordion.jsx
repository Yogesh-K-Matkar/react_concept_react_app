export const Accordion = (props) => {
  const { faqData } = props;

  return (
    <>
      <li>
        <div className="accordion-grid">
          <p>{faqData.question}</p>
          <button>Show</button>
        </div>
      </li>
    </>
  );
};

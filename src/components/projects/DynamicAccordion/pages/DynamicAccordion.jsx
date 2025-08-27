import { useState, useEffect } from "react";
import faqData from "../JSON/faqData.json";
import { Accordion } from "../components/UI/Accordion";

export const DynamicAccordion = () => {
  console.log(faqData);

  const [faqs, setFaqs] = useState([]);
  const [activeTabId, setActiveTabId] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      try {
        setFaqs(faqData);
      } catch (error) {
        console.error("Error Message ", error.message);
        console.error("Error Status ", error.response.status);
        console.error("Error Data ", error.response.data);
      }
    };
    fetchData();
  }, []);

  function handleToggleTab(id) {
    setActiveTabId((prevState) => {
      return prevState === id ? 0 : id;
    });
  }

  return (
    <>
      <h1>
        <u>The Accordion</u>
      </h1>
      <br />
      <ul className="section-accordion">
        {faqs.map((curFaq) => {
          let id = curFaq.id;
          return (
            <Accordion
              key={id}
              faqData={curFaq}
              isActiveTab={activeTabId === id ? true : false}
              handleToggleTab={handleToggleTab}
            />
          );
        })}
      </ul>
    </>
  );
};

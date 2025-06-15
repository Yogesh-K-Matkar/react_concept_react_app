import { useState } from "react";

export const TodoDateTime = (props) => {
  const { pCSSModule } = props;
  const [dateTime, setDateTime] = useState("");

  setInterval(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    setDateTime(`${formattedDate} - ${formattedTime}`);
  }, 1000);

  return <h2 className={pCSSModule["date-time"]}>{dateTime}</h2>;
};

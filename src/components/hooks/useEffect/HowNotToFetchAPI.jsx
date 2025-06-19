import { useEffect, useState } from "react";
import cssModule from "./Pokemon.module.css";

export const HowNotToFetchAPI = () => {
  const [apiData, setAPIData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => (data.length > 0 ? setAPIData(data) : setAPIData([])))
      .catch((err) => console.log(err));
  }, []);

  //console.log(apiData);

  return (
    <div
      className={`${cssModule["pokemon-container"]} ${cssModule["pokemon-effect-container"]}`}
    >
      <h1 className={cssModule["card-heading"]}>
        Listing Data Using useEffect Through FetchAPI Call
      </h1>
      <ul>
        {apiData.map((currItem) => {
          return (
            <li key={currItem.id}>{currItem.id + ". " + currItem.title}</li>
          );
        })}
        ;
      </ul>
    </div>
  );
};

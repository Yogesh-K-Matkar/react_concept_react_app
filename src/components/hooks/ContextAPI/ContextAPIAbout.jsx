import { useContext } from "react";
import { BioContextStore } from "./ContextAPIIndex";

export const ContextAPIAbout = () => {
  const { bioInfo } = useContext(BioContextStore);

  return (
    <section
      className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-amber-200 text-black`}
    >
      <h1>Passing Props Using Context API</h1>
      <div className={`justify-center items-center`}>
        <h1>Basic Info</h1>
        <p>
          FullName:-{bioInfo.FullName}
          <br />
          FirstName:-{bioInfo.FirstName}
          <br />
          LastName:-{bioInfo.LastName}
        </p>
      </div>
    </section>
  );
};

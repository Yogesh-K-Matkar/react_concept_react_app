import { useContext } from "react";
import { BioContextStore } from "./ContextAPIIndex";

export const ContextAPIHome = () => {
  const { bioInfo, addressInfo } = useContext(BioContextStore);

  return (
    <section
      className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-amber-200  text-black`}
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
        <hr />
        <h1>Address Info</h1>
        <p>
          City:-{addressInfo.Address.City}
          <br />
          State:-{addressInfo.Address.State}
          <br />
          Pincode:-{addressInfo.Address.Pincode}
        </p>
      </div>
    </section>
  );
};

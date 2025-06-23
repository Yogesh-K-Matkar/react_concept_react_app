import { useContext } from "react";
import { BioContextStore } from "./ContextAPIIndex";

/* Notes:-
   State Management:-

   5. Custom Hook:-

           Requirement of custom hook is when want to put multiple times calling of same react hooks into created custom hook & then calling that custom hook to reduce code of multiple calling same hooks.

		        Syntax:- const useCustomHook1=()=>{
                         	const hookObject=useContext();
                         	return hookObject;
                         }

       a. All custom hooks can be prefix with 'use' basic rule of hooks.
       b. Custom hooks is create upon as wrapper of same react hook that is used multiple times in multiple component to avoid DRY principle.


 */

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

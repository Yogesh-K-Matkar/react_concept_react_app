//import { createContext, useContext } from "react";
import { createContext, use } from "react";

/* Notes:-
   State Management:-
 
    4. Context Hook:- 

      Prop Drilling:-
        Passing Props through Source Component to sub-sequent child component until it reach to required destination component.
        To solve above problems ContextAPI concept comes into picture.

      ContextAPI :- This concept helps in passing data to required destination component directly without passing through sub-sequent component.
                      ContextAPI is mainly used when scenario of same data required by multiple child components.

        1. createContext(Source Component):- Creates a Context object which acts like a Component.
                                            E.g. createContext objects acts as WholeSeller that sells multiple products.

        2. Provider:- Works as component which actually property of Context object created using createContext that provides the context value to its children.
                      E.g. Provider acts as Distributor/Delivery Person of WholeSeller that takes variety of Products and Store it in Tempo.

        3. useContext(Consumer/Destination Component):- A hook that allows you to consume a context.
                                  E.g. useContext acts as Consumer which uses required Stored Product from delivered by Delivery Boy.


    5. Custom Hook:-

           Requirement of custom hook is when want to put multiple times calling of same react hooks into created custom hook & then calling that custom hook to reduce code of multiple calling same hooks.

		        Syntax:- const useCustomHook1=()=>{
                         	const hookObject=useContext();
                         	return hookObject;
                         }

       a. All custom hooks can be prefix with 'use' basic rule of hooks.
       b. Custom hooks is create upon as wrapper of same react hook that is used multiple times in multiple component to avoid DRY principle.


    6. use Hook:-
           Is replacement to useContext hook which has limitation of defining at top of component but 'use' hook can be call within condition, looping logic which gives more flexibility.



 */

//1st Step
export const BioContextStore = createContext();

//2nd Step
export const BioProvider = ({ children }) => {
  const bioInfo = {
    FullName: "Yogesh Matkar",
    FirstName: "Yogesh",
    LastName: "Matkar",
  };

  const addressInfo = {
    Address: { City: "Mumbai", State: "Maharashtra", Pincode: "400065" },
  };

  const personBioDetails = {
    bioInfo: bioInfo,
    addressInfo: addressInfo,
  };

  //const bioDetails = { FirstName: "Yogesh", LastName: "Matkar" };

  return (
    <BioContextStore.Provider value={personBioDetails}>
      {children}
    </BioContextStore.Provider>
  );
};

export const useBioCustomContext = () => {
  //const customContext = useContext(BioContextStore);

  //Replace `useContext` hook by `use` hook

  const customContext = use(BioContextStore);

  if (customContext === undefined) {
    throw new Error("Component must be wrapped with BioProvider");
  }

  return customContext;
};

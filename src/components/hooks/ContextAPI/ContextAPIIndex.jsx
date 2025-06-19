import { createContext } from "react";

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

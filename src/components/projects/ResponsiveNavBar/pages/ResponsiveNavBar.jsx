import { createContext, useContext } from "react";
import { HeroSection } from "../components/UI/HeroSection";
import { Navbar } from "../components/UI/Navbar";
import { Footer } from "../components/layout/Footer";

const ResponsiveNavBarStore = createContext();

const ResponsiveNavBarProvider = (props) => {
  const { children } = props;

  const navLinks = {
    navLinks: [
      { url: "#", name: "Home" },
      { url: "#", name: "About" },
      { url: "#", name: "Services" },
      { url: "#", name: "Contact" },
    ],
  };

  return (
    <ResponsiveNavBarStore.Provider value={navLinks}>
      {children}
    </ResponsiveNavBarStore.Provider>
  );
};

export const ResponsiveNavBar = () => {
  return (
    <>
      <ResponsiveNavBarProvider>
        <Navbar />
      </ResponsiveNavBarProvider>
      <HeroSection />
      <Footer />
    </>
  );
};

export const useCustomResponsiveNavBar = () => {
  const customContext = useContext(ResponsiveNavBarStore);

  console.log(customContext);

  if (customContext === undefined) {
    throw new Error("Component must be wrapped with ResponsiveNavBarProvider");
  }

  return customContext;
};

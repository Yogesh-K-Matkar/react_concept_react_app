/* eslint-disable react-refresh/only-export-components */
import { createContext, use, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  function handleToggleTheme() {
    setTheme((preStateValue) => (preStateValue === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeModeCustomHook = () => {
  const context = use(ThemeContext);
  return context;
};

export const DarkLightTheme = () => {
  const { theme, handleToggleTheme } = useThemeModeCustomHook();

  return (
    <div
      className={`p-4 l-lvh flex flex-col justify-center items-center  ${
        theme === "dark" ? "!bg-gray-800" : "!bg-white"
      }`}
    >
      <h1
        className={`my-4 text-xl ${
          theme === "dark" ? "!text-white" : "!text-black"
        }`}
      >
        {theme === "dark" ? "Dark Mode Website" : "Light Mode Website"}
      </h1>
      <p className={`${theme === "dark" ? "!text-white" : "!text-black"}`}>
        Hello!! My React v19
      </p>
      <button onClick={handleToggleTheme}>
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

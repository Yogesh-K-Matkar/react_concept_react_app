import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App, Intro, GroupOfSameComponent } from "./App.jsx";
import { Practices } from "./components/Practices.jsx";

/* Notes:-
1. Imported Components/Component Function from another JSX(App.jsx) as above eg. App,Intro,GropOfSameComponent (ComponentsName)
2. Used imported component eg.  <Intro />
                                <App />
                                <Practices />
                                <GroupOfSameComponent />
*/

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Intro />
    <App />
    <Practices />
    <GroupOfSameComponent />
  </StrictMode>
);

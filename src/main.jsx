import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./ReactFrameworkIndex.css";
// import ReactApp from "./ReactFrameworkApp.jsx";
import "./ReactRouterFrameworkIndex.css";
import ReactRouterApp from "./ReactRouterFrameworkApp.jsx";

/* Notes:-
1. Imported Components/Component Function from another JSX(App.jsx) as above eg. ReactApp,ReactRouterApp (ComponentsName)
2. Used imported component eg.  <ReactApp />                               
*/

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //    <ReactApp />
  // </StrictMode>
  <ReactRouterApp />
);

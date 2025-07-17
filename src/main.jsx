import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import ReactApp from "./ReactFrameworkApp.jsx";
//import "./ReactFrameworkIndex.css";
// import ReactRouterApp from "./ReactRouterFrameworkApp.jsx";
//import "./ReactRouterFrameworkIndex.css";

const ReactApp = React.lazy(() => import("./ReactFrameworkApp"));
const ReactRouterApp = React.lazy(() => import("./ReactRouterFrameworkApp"));

let AppConcept = import.meta.env.VITE_APP_CONCEPT;

const LoadComponent = () => {
  switch (AppConcept) {
    case "REACTAPP":
      import("./ReactFrameworkIndex.css");
      return (
        <>
          <h1 style={{ marginTop: "2rem", marginBottom: "5rem" }}>
            <u>Project 1. React Concept</u>
          </h1>
          <br />
          <ReactApp />
        </>
      );
    case "REACTROUTERAPP":
      import("./ReactRouterFrameworkIndex.css");
      return (
        <>
          <h1 style={{ marginTop: "2rem", marginBottom: "5rem" }}>
            <u>Project 2. React Router Concept</u>
          </h1>
          <br />
          <ReactRouterApp />
        </>
      );
    case "FULLSTACK_AXIOSAPP":
      return (
        <>
          <h1 style={{ marginTop: "2rem", marginBottom: "5rem" }}>
            <u>Project 3. Full Stack CRUD Operation Using Axios Concept</u>
          </h1>
          <br />
          <div>Need to Start Working On Concept....</div>
        </>
      );

    default:
      return <div>More Upcoming Concept ....</div>;
      break;
  }
};

/* Notes:-
1. Imported Components/Component Function from another JSX(App.jsx) as above eg. ReactApp,ReactRouterApp (ComponentsName)
2. Used imported component eg.  <ReactApp />                               
*/

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoadComponent />
  </StrictMode>
);

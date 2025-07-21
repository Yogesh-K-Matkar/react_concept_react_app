import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import ReactApp from "./ReactFrameworkApp.jsx";
// import "./ReactFrameworkIndex.css";
// import ReactRouterApp from "./ReactRouterFrameworkApp.jsx";
// import "./ReactRouterFrameworkIndex.css";
//import { CRUDOperationsAxiosApp } from "./components/CRUDOperationsAxiosApp";
//import "./CRUDOperationsAxiosIndex.css";
const ReactApp = React.lazy(() => import("./ReactFrameworkApp"));
const ReactRouterApp = React.lazy(() => import("./ReactRouterFrameworkApp"));
const CRUDOperationsAxiosApp = React.lazy(() =>
  import("./CRUDOperationsAxiosApp")
);

let AppConcept = import.meta.env.VITE_APP_CONCEPT;

export const LoadComponent = () => {
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

    case "FULLSTACKAXIOSAPP":
      import("./CRUDOperationsAxiosIndex.css");
      return (
        <>
          <h1
            style={{
              marginTop: "2rem",
              marginBottom: "5rem",
              color: "Highlight",
            }}>
            <u>Project 3. Full Stack CRUD Operation Using Axios Concept</u>
          </h1>
          <br />
          <CRUDOperationsAxiosApp />
        </>
      );

    default:
      return <div>More Upcoming Concept ....</div>;
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

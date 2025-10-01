import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import ReactApp from "./ReactFrameworkApp.jsx";
// import "./ReactFrameworkIndex.css";
// import ReactRouterApp from "./ReactRouterFrameworkApp.jsx";
// import "./ReactRouterFrameworkIndex.css";
//import { CRUDOperationsAxiosApp } from "./components/CRUDOperationsAxiosApp";
//import "./CRUDOperationsAxiosIndex.css";
//import { DynamicAccordionStaticJSONApp } from "./components/DynamicAccordionStaticJSONApp";
//import "./DynamicAccordionStaticJSONIndex.css";
//import { ResponsiveNavBarApp } from "./components/ResponsiveNavBarApp";
//import "./ResponsiveNavBarIndex.css";
//import { CountryAtlasApp } from "./components/CountryAtlasApp";
//import "./CountryAtlasIndex.css";
//import { ReactQueryApp } from "./components/ReactQueryApp";
//import "./ReactQueryIndex.css";
// import { ReactReduxApp } from "./components/ReactReduxApp";
// import "./ReactReduxIndex.css";

const ReactApp = React.lazy(() => import("./ReactFrameworkApp"));
const ReactRouterApp = React.lazy(() => import("./ReactRouterFrameworkApp"));
const CRUDOperationsAxiosApp = React.lazy(() =>
  import("./CRUDOperationsAxiosApp")
);
const DynamicAccordionStaticJSONApp = React.lazy(() =>
  import("./DynamicAccordionStaticJSONApp")
);
const ResponsiveNavBarApp = React.lazy(() => import("./ResponsiveNavBarApp"));

const CountryAtlasApp = React.lazy(() => import("./CountryAtlasApp"));

const ReactQueryApp = React.lazy(() => import("./ReactQueryApp"));

const ReactReduxApp = React.lazy(() => import("./ReactReduxApp"));

let AppConcept = import.meta.env.VITE_APP_CONCEPT;

export const LoadComponent = () => {
  const styleTitle = {
    marginTop: "2rem",
    marginBottom: "5rem",
    color: "Highlight",
  };

  switch (AppConcept) {
    case "REACTAPP":
      import("./ReactFrameworkIndex.css");
      return (
        <>
          <h1 style={styleTitle}>
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
          <h1 style={styleTitle}>
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
          <h1 style={styleTitle}>
            <u>Project 3. Full Stack CRUD Operation Using Axios Concept</u>
          </h1>
          <br />
          <CRUDOperationsAxiosApp />
        </>
      );

    case "DYNAMICACCORDIONSTATICJSONAPP":
      import("./DynamicAccordionStaticJSONIndex.css");
      return (
        <>
          <h1 style={styleTitle}>
            <u>Project 4. Dynamic Accordion Using Axios Concept</u>
          </h1>
          <br />
          <DynamicAccordionStaticJSONApp />
        </>
      );

    case "RESPONSIVENAVBARAPP":
      import("./ResponsiveNavBarIndex.css");
      return (
        <>
          <h1 style={styleTitle}>
            <u>Project 5. Responsive Navbar Concept</u>
          </h1>
          <br />
          <ResponsiveNavBarApp />
        </>
      );

    case "COUNTRYATLASAPP":
      import("./CountryAtlasIndex.css");
      return (
        <>
          <h1 style={styleTitle}>
            <u>
              Project 6. React-Router,React Icons, API Calling Using AXIOS
              Concept
            </u>
          </h1>
          <br />
          <CountryAtlasApp />
        </>
      );

    case "REACTQUERYAPP":
      import("./ReactQueryIndex.css");
      return (
        <>
          <h1 style={styleTitle}>
            <u>Project 7. React Query Concept</u>
          </h1>
          <br />
          <ReactQueryApp />
        </>
      );

    case "REACTREDUXAPP":
      import("./ReactReduxIndex.css");
      return (
        <>
          <h1 style={styleTitle}>
            <u>Project 8. React Redux Concept</u>
          </h1>
          <br />
          <ReactReduxApp />
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

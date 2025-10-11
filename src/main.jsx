import React, { StrictMode, Suspense } from "react";
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
// import { CurrencyConvertorApp } from "./components/CurrencyConvertorApp";
// import "./CurrencyConvertorIndex.css";
// import { ReactReduxApp } from "./components/ReactReduxApp";
// import "./ReactReduxIndex.css";
// import { ReactReduxToolkitApp } from "./components/ReactReduxToolkitApp";
// import "./ReactReduxToolkitIndex.css";

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

const CurrencyConvertorApp = React.lazy(() => import("./CurrencyConvertorApp"));

const ReactReduxApp = React.lazy(() => import("./ReactReduxApp"));

const ReactReduxToolkitApp = React.lazy(() => import("./ReactReduxToolkitApp"));

export const LoadComponent = () => {
  const AppConcept = import.meta.env.VITE_APP_CONCEPT;

  const APICallingWay = import.meta.env.VITE_API_CALLING_WAY;

  const styleTitle = {
    marginTop: "1rem",
    marginBottom: "1rem",
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
          <Suspense fallback={<div>Loading...</div>}>
            <ReactApp />
          </Suspense>
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
          <Suspense fallback={<div>Loading...</div>}>
            <ReactRouterApp />
          </Suspense>
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
          <Suspense fallback={<div>Loading...</div>}>
            <CRUDOperationsAxiosApp />
          </Suspense>
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
          <Suspense fallback={<div>Loading...</div>}>
            <DynamicAccordionStaticJSONApp />
          </Suspense>
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
          <Suspense fallback={<div>Loading...</div>}>
            <ResponsiveNavBarApp />
          </Suspense>
        </>
      );

    case "COUNTRYATLASAPP":
      import("./CountryAtlasIndex.css");
      return (
        <>
          <h1 style={styleTitle}>
            <u>Project 6. Country Atlas Details Project</u>
            <br />
            <u>
              (Using React, React Icons, API Calling Using AXIOS, React-Router
              Concept)
            </u>
          </h1>
          <br />
          <Suspense fallback={<div>Loading...</div>}>
            <CountryAtlasApp />
          </Suspense>
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
          <Suspense fallback={<div>Loading...</div>}>
            <ReactQueryApp />
          </Suspense>
        </>
      );

    case "CURRENCYCONVERTORAPP":
      import("./CurrencyConvertorIndex.css");

      return (
        <>
          <h1 style={styleTitle}>
            <u>Project 8. Currency Convertor Project</u>
            <br />
            <u>
              {`(Using React,${
                APICallingWay == "reactquery" ? " React Query" : ""
              }
              API Calling Using AXIOS Concept)`}
            </u>
          </h1>
          <br />
          <Suspense fallback={<div>Loading...</div>}>
            <CurrencyConvertorApp APICallingWay={APICallingWay} />
          </Suspense>
        </>
      );

    case "REACTREDUXAPP":
      import("./ReactReduxIndex.css");
      return (
        <>
          <h1 style={styleTitle}>
            <u>Project 9. React Redux Concept</u>
          </h1>
          <br />
          <Suspense fallback={<div>Loading...</div>}>
            <ReactReduxApp />
          </Suspense>
        </>
      );

    case "REACTREDUXTOOLKIT":
      import("./ReactReduxToolkitIndex.css");
      return (
        <>
          <h1 style={styleTitle}>
            <u>Project 10. React Redux Toolkit Concept</u>
          </h1>
          <br />
          <Suspense fallback={<div>Loading...</div>}>
            <ReactReduxToolkitApp />
          </Suspense>
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

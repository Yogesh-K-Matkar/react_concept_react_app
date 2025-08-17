import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./CountryAtlasApp.css";

import AppLayout from "./components/projects/CountryAtlas/components/Layout/AppLayout";

import Home from "./components/projects/CountryAtlas/pages/Home";
import About from "./components/projects/CountryAtlas/pages/About";
import Country from "./components/projects/CountryAtlas/pages/Country";
import Contact from "./components/projects/CountryAtlas/pages/Contact";

import ErrorPage from "./components/projects/CountryAtlas/pages/ErrorPage";

const childrenRoutes = [
  { path: "/", element: <Home /> },
  { path: "about", element: <About /> },
  { path: "country", element: <Country /> },
  { path: "contact", element: <Contact /> },
];

const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: childrenRoutes,
  },
]);

const CountryAtlasApp = () => {
  return <RouterProvider router={mainRoute} />;
};

export default CountryAtlasApp;

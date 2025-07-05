import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./ReactRouterFrameworkApp.css";
import { Home } from "./components/projects/ReactRouter/pages/Home";
import { About } from "./components/projects/ReactRouter/pages/About";
import { Movie } from "./components/projects/ReactRouter/pages/Movie";
import { Contact } from "./components/projects/ReactRouter/pages/Contact";
import { AppLayout } from "./components/projects/ReactRouter/components/layout/AppLayout";
import { ErrorPage } from "./components/projects/ReactRouter/pages/ErrorPage";

/* 
Notes:-

REACT-ROUTER(v7.6+):-(Separate from REACT)

1. REACT ROUTER(v6.4+) is another framework similar like REACT but it provides different functionality such as Routing in web application, we are
   implementing React Router in React Web Application.

2. Install react-router module.
    
    Syntax:-
           
           > npm i react-router-dom@latest
      
      Then verify module is installed or not in package.json within dependencies key's value along with module version 

3. Routing/Navigation :- Moving through different UI is SPA(Single Page Application) is done through React-Router framework
   concept.
   
   Syntax:- Two ways to create route

   1. Old (Using helper createRoutesFromElements):
   
           import { createBrowserRouter } from "react-router-dom";

            const router = createBrowserRouter(
              createRoutesFromElements(
                <>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                </>
              );
            );

            <RouterProvider router={router} />

   2. New:-
            import { createBrowserRouter } from "react-router-dom";

            const router = createBrowserRouter([
                    { path: "/", element: <Home/>  },
                    { path: "/about", element: <About/> },
            ]);

            <RouterProvider router={router} />

    (Note:- / in path defines route/home route of application means it load initial component)

    <RouterProvider> react-router-dom inbuilt component that shares router path to entire application, 
    means path call in browser anywhere within application that path is check in router array object by RouterProvider 
    and then navigate to associated component

4. children in createBrowserRouter means child component element based on path that is placed between parent component element.

*/

const ReactRouterApp = () => {
  const routeLinks = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/movie", element: <Movie /> },
        { path: "/contact", element: <Contact /> },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <>
      <h1>
        <u>
          <b> Learn React Router Framework </b>
        </u>
      </h1>
      <br />
      <hr />
      <br />
      <RouterProvider router={routeLinks} />
    </>
  );
};

export default ReactRouterApp;

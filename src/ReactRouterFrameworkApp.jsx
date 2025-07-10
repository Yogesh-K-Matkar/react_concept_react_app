import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./ReactRouterFrameworkApp.css";
import { Home } from "./components/projects/ReactRouter/pages/Home";
import { About } from "./components/projects/ReactRouter/pages/About";
import { Movie } from "./components/projects/ReactRouter/pages/Movie";
import { Contact } from "./components/projects/ReactRouter/pages/Contact";
import { AppLayout } from "./components/projects/ReactRouter/components/layout/AppLayout";
import { ErrorPage } from "./components/projects/ReactRouter/pages/ErrorPage";
import { getMoviesData } from "./components/projects/ReactRouter/api/GetAPIData";

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

    Eg:-

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
                errorElement:<ErrorPage />,
    	},
     ]);

     <RouterProvider router={router} />

  
  Props of createBrowserRouter:-

  a. path :- It accept navigation path name which is display in browser URL.

  b. element :- It holds component which gets render when associated path display in browser URL

  c. children:- It also hold array of path along with child component which is going to render in Page Body section.

       1.  In above element <AppLayout> is component which consist of Header and Footer section which common for entire application.
       2.  Children are included dynamically in Body section between Header section & Footer section by <Outlet> react router component based on associated 	   path gets 	   called on clicking of link which is generated using <NavLink> react router component.

  d. errorElement :- It holds component which gets render when associated element components error occur due to syntax, logical etc.

  e. loader :- It is used to fetch data from API and pass it to component using useLoaderData() react router hook.
  
4. React Router Hooks:- React Router provides several hooks to work with routing and navigation.
    a. useRouteError:- This hook is used to access error information when a route
    b. useLoaderData:- This hook is used to access data loaded by the loader function associated with a route.
    c. useNavigate:- This hook is used to programmatically navigate to different routes.

*/

const ReactRouterApp = () => {
  const routeLinks = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/movie", element: <Movie />, loader : getMoviesData },
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

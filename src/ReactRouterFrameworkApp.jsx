import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./ReactRouterFrameworkApp.css";
import { Home } from "./components/projects/ReactRouter/pages/Home";
import { About } from "./components/projects/ReactRouter/pages/About";
import { Movie } from "./components/projects/ReactRouter/pages/Movie";
import { Contact } from "./components/projects/ReactRouter/pages/Contact";
import { AppLayout } from "./components/projects/ReactRouter/components/layout/AppLayout";
import { ErrorPage } from "./components/projects/ReactRouter/pages/ErrorPage";
import {
  getMoviesData,
  getMoviesDataByParams,
} from "./components/projects/ReactRouter/api/GetAPIData";
import { MovieDetails } from "./components/projects/ReactRouter/components/UI/MovieDetailCard";
import { submitContactFormData } from "./components/projects/ReactRouter/pages/Contact";

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
    d. useNavigation:- This hook is use to get information about current navigation state such as location, action, etc
    e. useParams(React version below v6.4):- This hook is use to get request parameter pass in browser URL.
       But (React version above v6.4+) provides new concept introduce instead of using useParams() hook,
       to get request parameter special {params} object as paramter to component/function. 

5.  .env File :-
    This file is used to store environment variables such as API keys, URLs, etc. It should not be committed to version control for security reasons.

    (Note:- .env file should be placed at the root of the project directory.)

    Syntax:-

    In React project below is the example of .env file,

    Alway append REACT (FOLLED BY UNDERSCROLL 'APP' UNDERSCROLL) before variable name to make it accessible in React application.

    REACT_APP_API_KEY=your_api_key_here
    REACT_APP_API_URL=https://api.example.com

    import (REACT.meta.env.REACT_APP_API_KEY) from "react"; --To Access Environment Variables

    But in Vite project below is the example of .env file,

    Alway append VITE(FOLLED BY UNDERSCROLL) before variable name to make it accessible in React application.

    VITE_API_KEY=your_api_key_here
    VITE_API_URL=https://api.example.com

    import.meta.env.VITE_API_KEY from "react";  
    --To Access Environment Variables

6.  Dynamic Routing:-
    Dynamic routing is used to create routes based on data or user input. It allows you to create routes that can change at runtime.

    Syntax:-
    In React Router, dynamic routing can be achieved by using route parameters in the path.

    Example:-

    ```jsx
    <path="/movie/:movieID" element={<Movie />} />
    ```

    In this example, `:movieID` is a route dynamic parameter that can be accessed in the `Movie` component using the `useParams` hook.

7. Form Submission:-
    React Router provides a way to handle form submissions using the `action` prop in the route configuration. This allows you to handle form data submission and processing.

    Syntax:-
    In the route configuration, you can define an `action` function that will be called when the form is submitted.

    Example:
    In route configuration, action prop is used to handle form submission and process the form data as below.

    ```jsx
    { path: "/contact", element: <Contact />, action: submitContactFormData}.
    ```

    Then, passing {request} object as prop to function where formData() function retrun response which is then converted in object format through object.fromEntries() which further used for processing array like structure data to convert to object format.

*/

const ReactRouterApp = () => {
  const routeLinks = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/movie", element: <Movie />, loader: getMoviesData },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: getMoviesDataByParams,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: submitContactFormData,
        },
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

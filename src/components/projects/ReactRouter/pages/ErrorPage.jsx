import { NavLink, useNavigate, useRouteError } from "react-router-dom";

/*
Notes:-

1. useRouteError Hook:- This hook provide error details means cause of error which gives details of Type Of Error and error, status, statusText, etc.

      Syntax:-

            import { useRouteError } from "react-router-dom";

            const errorDetails = useRouteError();


      2- Ways of showing error page

      a. Using errorElement key -- Best way 
         
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


      b. Using children json object


	const routeLinks = createBrowserRouter([
    	{
      		path: "/",
      		element: <AppLayout />,
      		children: [
        			{ path: "/", element: <Home /> },
        			{ path: "/about", element: <About /> },
        			{ path: "/movie", element: <Movie /> },
        			{ path: "/contact", element: <Contact /> },

				{ path: "*", element: <ErrorPage /> },                              --- (Imp:- path: "*" -  Where * is Wild Card Route)
      			  ],
                
    	},
      ]);
  

*/

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  console.log(error);
  console.log(navigate);

  if (error.status === 404) {
    return (
      <section className="error-section">
        <div id="error-text">
          <figure>
            <img
              src="../../../../../src/assets/images/404_error_page.gif"
              alt="404 Page Not Found"
            />
          </figure>
          <div className="text-center">
            <p className="p-a">
              The page you are looking for could not be found.
            </p>
            <p className="p-b">... Back to previous page</p>
          </div>
        </div>
        <NavLink className="btn btnclose" to="/">
          Go Back To Home Page
        </NavLink>
        <br />
        <button className="btn btnclose" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </section>
    );
  }
  return <h1>The page you are looking does not exist.</h1>;
};

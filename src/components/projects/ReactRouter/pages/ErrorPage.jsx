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
  
  2. useNavigate Hook:- This hook is use to navigate specially to immediate previous URL/Page. Can also navigate to any URL/Page.

      Syntax:-

             import { useNavigate } from "react-router-dom";
             
             const navigate = useNavigate();
           


              <button className="btn btnclose" onClick={() => navigate(-1)}>
          		Go Back
              </button>


       Note:-  -1 mean previous page
                / mean home page 

*/

export const ErrorPage = () => {
  const hookRouteError = useRouteError();
  const hookNavigate = useNavigate();

  console.log(hookRouteError);
  console.log(hookNavigate);

  if (hookRouteError.status === 404) {
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
        <button className="btn btnclose" onClick={() => hookNavigate(-1)}>
          Go Back
        </button>
      </section>
    );
  }
  return <h1>The page you are looking does not exist.</h1>;
};

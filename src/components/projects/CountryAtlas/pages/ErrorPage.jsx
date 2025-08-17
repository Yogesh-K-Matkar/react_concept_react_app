import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const errorDetails = useRouteError();
  const { status, statusText, data } = errorDetails;

  console.error(status, statusText, data);
  return (
    <>
      <h1>Oops! An error occurred.</h1>
      {errorDetails && <p>{data}</p>}
      <NavLink to="/">
        <button>Go Back</button>
      </NavLink>
    </>
  );
};

export default ErrorPage;

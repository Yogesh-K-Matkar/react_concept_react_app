import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router-dom";

import { fetchPostById } from "../../api/api.js";

const ReactQueryFetchDetails = () => {
  const params = useParams();
  const { id } = params;

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["post", id], //Like useState
    queryFn: async () => await fetchPostById(id), //Like useEffect
  });

  console.log("API Data:", data);

  if (isPending) return <div className="loader">Loading...</div>;
  if (isError)
    return <div>{console.error(error.message || "Error fetching data!")}</div>;

  const { title, body } = data;

  return (
    <>
      <h1>ReactQuery Fetch Data Details</h1>
      <div className="section-accordion">
        <h1>Post ID:- {id}</h1>
        <div>
          <p>Title: {title}</p>
          <p>Body: {body}</p>
        </div>
        <NavLink to="/fetch/reactquery">
          <button>Go Back</button>
        </NavLink>
      </div>
    </>
  );
};

export default ReactQueryFetchDetails;

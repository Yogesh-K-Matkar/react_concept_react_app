import { useQuery } from "@tanstack/react-query";
import { NavLink, useNavigate, useParams } from "react-router-dom";

import { fetchPostById } from "../../api/api.js";

const ReactQueryFetchDetails = () => {
  const params = useParams();
  let { id } = params;

  const navigate = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["post"], //Like useState
    queryFn: async () => await fetchPostById(id), //Like useEffect
  });

  if (isPending) return <div className="loader">Loading...</div>;
  if (isError)
    return <div>{console.error(error.message || "Error fetching data!")}</div>;

  console.log(data);

  id = data.id;
  let { title, body } = data;

  return (
    <>
      <h1>ReactQuery Fetch Data</h1>
      <div className="section-accordion">
        <h1>Post ID Number:- {id}</h1>
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

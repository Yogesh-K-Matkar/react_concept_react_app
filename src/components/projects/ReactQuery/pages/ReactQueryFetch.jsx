//import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchPosts from "../api/api.js";
import { NavLink } from "react-router-dom";

const ReactQueryFetch = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts"], //Like useState
    queryFn: async () => await fetchPosts(), //Like useEffect
    gcTime: 2 * 1000, //Garbage Collection Time Till 2sec
    staleTime: 5 * 1000, //Keep Data Fresh Time Till 5sec
    refetchInterval: 6 * 1000, //Refetch Data Every 6sec automatically call api without taking any action
    refetchIntervalInBackground: true, //Refetch Data Every automatically call api without taking any action when Page/Tab is not active
  });

  console.log("API Data:", data);

  // const preStyle = useMemo(
  //   () => ({
  //     backgroundColor: "#f0f0f0",
  //     padding: "10px",
  //     borderRadius: "5px",
  //     whiteSpace: "pre-wrap",
  //     wordWrap: "break-word",
  //   }),
  //   []
  // );

  if (isPending) return <div className="loader">Loading...</div>;
  if (isError)
    return <div>{console.error(error.message || "Error fetching data!")}</div>;

  return (
    <>
      <h1>ReactQuery Fetch Data</h1>
      <div className="section-accordion">
        <ol>
          {data?.map((post) => {
            let { id, title, body } = post;
            return (
              <li key={id}>
                {id}. <NavLink to={`/fetch/reactquery/${id}`}>{title}</NavLink>
                <br />
                <br />
                {body}
              </li>
            );
          })}
        </ol>
      </div>
      {/* <pre style={preStyle}>{JSON.stringify(apiData, null, 2)}</pre> */}
    </>
  );
};

export default ReactQueryFetch;

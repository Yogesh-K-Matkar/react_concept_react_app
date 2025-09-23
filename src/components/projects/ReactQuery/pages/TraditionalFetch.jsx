//import { useMemo } from "react";
import { useState, useEffect, useCallback } from "react";
import { fetchPosts } from "../api/api.js";

const TraditionalFetch = () => {
  const [apiData, setAPIData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const apiData = await fetchPosts();
      setAPIData(apiData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
      setIsError(true);
    }
  }, [apiData]);

  useEffect(() => {
    fetchData();

    apiData && setIsLoading(false);
  }, []);

  console.log("API Data:", apiData);

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

  if (isLoading) return <div className="loader">Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <>
      <h1>Traditional Fetch Data</h1>
      <div className="section-accordion">
        <ol>
          {apiData?.map((post) => {
            const { id, title, body } = post;
            return (
              <li key={id}>
                {id}. {title}
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

export default TraditionalFetch;

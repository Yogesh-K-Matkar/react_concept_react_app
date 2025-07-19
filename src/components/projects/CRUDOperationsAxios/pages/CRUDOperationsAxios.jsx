import { createContext, useEffect, useState } from "react";
import { getCall } from "../api_services_utils/AxiosAPIMethods";
import { Posts } from "../components/UI/Posts";

//const CRUDOperationsAxiosStore = createContext();

export const CRUDOperationsAxios = () => {
  const initLstPosts = [];

  const apiAccessMethod = import.meta.env.VITE_API_ACCESS_METHOD;
  const apiMethodCall = "get";

  useEffect(() => {
    try {
      if (apiAccessMethod === "axios") {
        switch (apiMethodCall) {
          case "get":
            getData("/posts");
            break;
        }
      }
    } catch (error) {
      console.error("Error Message ", error.message);
      console.error("Error Status ", error.response.status);
      console.error("Error Data ", error.response.data);
    }
  }, []);

  const [lstPosts, setLstPosts] = useState(initLstPosts);

  const getData = async (URL) => {
    const res = await getCall(URL);
    setLstPosts(res.data);
  };

  return (
    <>
      <Posts lstData={lstPosts} />
    </>
  );
};

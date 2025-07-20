import axios from "axios";
import { getMovies } from "../services/GetAxiosServices";

//Function
export const getMoviesData = async () => {
  const apiAccessMethod = import.meta.env.VITE_API_ACCESS_METHOD;

  try {
    const apiKey = import.meta.env.VITE_MOVIES_OMDBAPI_KEY;
    //console.log(apiKey);

    const baseURL = import.meta.env.VITE_MOVIES_OMDBAPI_BASEURL;
    const apiURL = `?i=tt3896198&apikey=${apiKey}&s=titanic&page1`;

    let resp = null,
      data = null;

    if (apiAccessMethod === "axios") {
      const apiCallCompanyStandard = import.meta.env
        .VITE_API_CALLING_USING_AXIOS_COMPANY_STANDARD;

      if (apiCallCompanyStandard === "true") {
        resp = await getMovies(apiURL);

        //console.log(resp);
      } else {
        resp = await axios.get(baseURL + apiURL);

        //console.log(resp);
      }
      data = await resp.data;
    } else {
      resp = await fetch(baseURL + apiURL);

      //console.log(resp);

      data = await resp.json();
    }

    console.log(data);

    return data;
  } catch (error) {
    if (apiAccessMethod === "axios") {
      console.error("Error message:", error.message);
      console.error("Error status:", error.response.status);
      console.error("Error data:", error.response.data);
    } else {
      console.log(error);
    }
  }
};

export const getMoviesDataByParams = async ({ params }) => {
  console.log(params);
  console.log(params.movieID);

  const apiAccessMethod = import.meta.env.VITE_API_ACCESS_METHOD;

  try {
    const apiKey = import.meta.env.VITE_MOVIES_OMDBAPI_KEY;
    console.log(apiKey);

    const movieID = params.movieID;

    const baseURL = import.meta.env.VITE_MOVIES_OMDBAPI_BASEURL;
    const apiURL = `?i=${movieID}&apikey=${apiKey}`;

    let resp = null,
      data = null;

    if (apiAccessMethod === "axios") {
      const apiCallCompanyStandard = import.meta.env
        .VITE_API_CALLING_USING_AXIOS_COMPANY_STANDARD;

      if (apiCallCompanyStandard === "true") {
        resp = await getMovies(apiURL);

        console.log(resp);
      } else {
        resp = await axios.get(baseURL + apiURL);

        console.log(resp);
      }

      data = await resp.data;
    } else {
      const resp = await fetch(baseURL + apiURL);

      console.log(resp);

      data = await resp.json();
    }

    console.log(data);

    return data;
  } catch (error) {
    if (apiAccessMethod === "axios") {
      console.error("Error message:", error.message);
      console.error("Error status:", error.response.status);
      console.error("Error data:", error.response.data);
    } else {
      console.log(error);
    }
  }
};

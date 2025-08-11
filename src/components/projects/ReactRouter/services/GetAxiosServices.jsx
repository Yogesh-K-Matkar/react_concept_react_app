//This logic of using axios is followed in real scenarioes in IT Companies for calling api's

import axios from "axios";

const getOMDBAPIBaseURL = () => {
  return import.meta.env.VITE_MOVIES_OMDBAPI_BASEURL;
};

// 1. Create a reusable Axios instance
const api = axios.create({ baseURL: getOMDBAPIBaseURL() });

// 2. Define a function to fetch movie data
export const getMovies = async (apiURL) => {
  return await api.get(apiURL);
};

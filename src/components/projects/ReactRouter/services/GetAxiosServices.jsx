//This logic of using axios is followed in real scenarioes in IT Companies for calling api's

import axios from "axios";

const getBaseURL = () => {
  return import.meta.env.VITE_MOVIES_API_BASEURL;
};

// 1. Create a reusable Axios instance
const api = axios.create({ baseURL: getBaseURL() });

// 2. Define a function to fetch movie data
export const getMovies = (apiURL) => {
  return api.get(apiURL);
};

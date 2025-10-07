import axios from "axios";

const apiBaseURL = import.meta.env
  .VITE_POSTS_JSONPLACEHOLDERTYPECODEAPI_BASEURL;

export const apiConfig = axios.create({
  baseURL: apiBaseURL,
});

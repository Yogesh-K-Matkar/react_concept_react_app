import axios from "axios";

const apiKey = import.meta.env.VITE_EXCHANGERATEAPIPROVIDE_APIKEY;
const apiBaseURL = import.meta.env.VITE_EXCHANGERATEAPIPROVIDE_APIBASEURL;

const apiConfig = axios.create({
  baseURL: `${apiBaseURL}${apiKey}`,
});

export default apiConfig;

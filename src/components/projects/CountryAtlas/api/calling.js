import axios from "axios";

const apiConfig = axios.create({
  baseURL: import.meta.env.VITE_COUNTRY_DATA_BASEURL,
});

//HTTP GET METHOD
export const getCountryData = () => {
  return apiConfig.get("/all?fields=flags,name,population,region,capital");
};

//HTTP GET METHOD
export const getCountryDataByName = (countryName) => {
  return apiConfig.get(`/name/${countryName}?fullText=true`);
};

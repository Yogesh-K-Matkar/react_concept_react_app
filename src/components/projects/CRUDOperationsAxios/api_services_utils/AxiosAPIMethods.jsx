import axios from "axios";

const initAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//GET Method
export const getCall = (getURL) => {
  console.log(getURL);
  return getURL === "" ? initAPI.get("/posts") : initAPI.get(getURL);
};

//POST Method
// export const postCall = (postURL) => {
//   return initAPI.post(postURL);
// };

//PUT
// export const PostCall = (apiURL) => {
//   return initAPI.post("");
// };

import axios from "axios";

const initAPI = axios.create({
  baseURL: import.meta.env.VITE_POSTS_JSONPLACEHOLDERTYPECODEAPI_BASEURL,
});

//GET Method
export const getCall = (getURL) => {
  console.log(getURL);
  return getURL === "" ? initAPI.get("/posts") : initAPI.get(getURL);
};

//POST Method
export const postCall = (postURL, postData) => {
  return initAPI.post(postURL, postData);
};

//PUT
// export const PostCall = (apiURL) => {
//   return initAPI.post("");
// };

//DELETE Method
export const deleteCall = (deleteURL) => {
  return initAPI.delete(deleteURL);
};

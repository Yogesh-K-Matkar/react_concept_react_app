import axios from "axios";

const initAPI = axios.create({
  baseURL: import.meta.env.VITE_POSTS_JSONPLACEHOLDERTYPECODEAPI_BASEURL,
});

//POST Method -CREATE -C
export const postCall = async (postURL, postData) => {
  return await initAPI.post(postURL, postData);
};

//GET Method -READ -R
export const getCall = async (getURL) => {
  console.log(getURL);
  return getURL === ""
    ? await initAPI.get("/posts")
    : await initAPI.get(getURL);
};

//PUT Method -UPDATE -U
export const putCall = (putURL, putData) => {
  return initAPI.put(putURL, putData);
};

//DELETE Method  -DELETE -D
export const deleteCall = async (deleteURL) => {
  return await initAPI.delete(deleteURL);
};

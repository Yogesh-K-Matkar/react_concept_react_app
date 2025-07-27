import axios from "axios";

const initAPI = axios.create({
  baseURL: import.meta.env.VITE_POSTS_JSONPLACEHOLDERTYPECODEAPI_BASEURL,
});

//POST Method -CREATE -C
export const postCall = async (payLoad) => {
  return await initAPI.post("/posts", payLoad);
};

//GET Method -READ -R
export const getCall = async () => {
  return await initAPI.get("/posts");
};

//PUT Method -UPDATE -U
export const putCall = (payLoad) => {
  return initAPI.put(`/posts/${payLoad.id}`, payLoad);
};

//DELETE Method  -DELETE -D
export const deleteCall = async (id) => {
  return await initAPI.delete(`/posts/${id}`);
};

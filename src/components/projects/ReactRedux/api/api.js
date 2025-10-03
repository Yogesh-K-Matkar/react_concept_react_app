import axios from "axios";

const apiConfig = axios.create({
  baseURL: import.meta.env.VITE_POSTS_JSONPLACEHOLDERTYPECODEAPI_BASEURL,
});

export const fetchTaskResponse = async () => {
  try {
    const response = await apiConfig.get("/todos?_limit=5");
    return response;
  } catch (error) {
    console.error("Error Message ", error.message);
    console.error("Error Status ", error.response.status);
    console.error("Error Data ", error.response.data);
  }
};

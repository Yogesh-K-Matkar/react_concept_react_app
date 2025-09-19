import axios from "axios";

const apiBaseURL = import.meta.env
  .VITE_POSTS_JSONPLACEHOLDERTYPECODEAPI_BASEURL;

const apiConfig = axios.create({
  baseURL: apiBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const fetchPosts = async (endpoint = "/posts") => {
  try {
    const response = await apiConfig.get(`${endpoint}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }

  return [];
};

export const fetchPostById = async (Id, endpoint = "/posts") => {
  try {
    const response = await apiConfig.get(`${endpoint}/${Id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }

  return [];
};

export default fetchPosts;

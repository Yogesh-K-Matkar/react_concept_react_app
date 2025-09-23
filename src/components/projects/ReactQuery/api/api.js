import axios from "axios";

const apiPostBaseURL = import.meta.env
  .VITE_POSTS_JSONPLACEHOLDERTYPECODEAPI_BASEURL;

const apiGithubBaseURL = import.meta.env.VITE_GITHUBAPI_BASEURL;

const apiPost = axios.create({
  baseURL: apiPostBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiGithub = axios.create({
  baseURL: apiGithubBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

//useQuery for Read
export const fetchPosts = async (pageno, endpoint = "/posts") => {
  try {
    const response = await apiPost.get(`${endpoint}/?_page=${pageno}&_limit=3`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching post data", error);
    throw error;
  }

  return [];
};

export const fetchPostById = async (Id, endpoint = "/posts") => {
  try {
    const response = await apiPost.get(`${endpoint}/${Id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching post data", error);
    throw error;
  }

  return [];
};

//useMutation for Create,Update,Delete

export const addPost = async (newPost, endpoint = "/posts") => {
  try {
    const response = await apiPost.post(endpoint, newPost);
    if (response.status === 201) {
      return response;
    }
  } catch (error) {
    console.error("Error adding post data", error);
    throw new Error(error);
  }
};

export const deletePosts = async (Id, endpoint = "/posts") => {
  try {
    const response = await apiPost.delete(`${endpoint}/${Id}`);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error("Error deleting post data", error);
    throw new Error(error);
  }

  return [];
};

export const updatePost = async (Id, UpdatedPost, endpoint = "/posts") => {
  try {
    const response = await apiPost.patch(`${endpoint}/${Id}`, UpdatedPost);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error("Error updating post data", error);
    throw new Error(error);
  }

  return [];
};

//useInfiniteQuery for Infinite Scrolling

export const fetchUsers = async ({ pageParam = 1 }, endpoint = "/users") => {
  try {
    const response = await apiGithub.get(
      `${endpoint}?per_page=10&page=${pageParam}`
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Error infinite fetching users data", error);
    throw error;
  }

  return [];
};

import { apiConfig } from "./tasksAPIConfig";

export const fetchTaskListAPI = async () => {
  try {
    const resp = await fetchTaskAPIResponse();

    console.log(resp);

    const { data, status } = resp;

    console.log(data, status);

    if (status === 200) {
      return await data.map((task) => task.title);
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchTaskAPIResponse = async () => {
  try {
    const response = await apiConfig.get("/todos?_limit=5");
    return response;
  } catch (error) {
    console.error("Error Message ", error.message);
    console.error("Error Status ", error.response.status);
    console.error("Error Data ", error.response.data);
  }
};

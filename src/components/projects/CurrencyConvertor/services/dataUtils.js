import apiConfig from "./api";

const custResponse = {
  status: 0,
  data: {},
  error: {},
  result: "",
};

//https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/FROM_CURRENCY/TO_CURRENCY/AMOUNT
const apiGet = async (endpoint) => {
  try {
    const response = await apiConfig.get(endpoint);

    if (response != undefined) {
      custResponse.status = await response.status;
      custResponse.data = await response.data;
      custResponse.result = await response.data.conversion_result.toFixed(2);
    }
  } catch (error) {
    custResponse.status = await error.response.status;
    custResponse.error = await error.response.data;

    console.error("Error Message ", error.message);
    console.error("Error Status ", error.response.status);
    console.error("Error Data ", error.response.data);
  }

  return custResponse;
};

export default apiGet;

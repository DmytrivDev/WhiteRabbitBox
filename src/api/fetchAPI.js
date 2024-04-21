import axios from "axios";

import { RESTAPI_URL } from "../constants";

export const fetchFunction = async (endpoint) => {
  try {
    const response = await axios.get(RESTAPI_URL + endpoint + "/");
    return response;
  } catch (error) {
    console.error("Error fetching options:", error);
  }
};

import axios from "axios";
import BASE_URL from "../service.config";

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v-1/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(
      "Error at services/auth/index.js: login() : ",
      error.response.data
    );
    return error.response.data;
  }
};

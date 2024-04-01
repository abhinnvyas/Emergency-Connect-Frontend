import axios from "axios";
import BASE_URL from "../service.config";

export const login = async (email, password) => {
  try {
    const data = {
      email: email,
      password: password,
    };
    const response = await axios.post(`${BASE_URL}/api/v-1/auth/login`, data);
    return response.data;
  } catch (error) {
    console.log(
      "Error at services/auth/index.js: login() : ",
      error.response ? error.response.data : error.message
    );
    return error.response.data;
  }
};

export const register = async (
  name,
  email,
  phone,
  age,
  blood_grp,
  gender,
  password
) => {
  try {
    const data = {
      name,
      email,
      phone,
      age,
      blood_grp,
      gender, //M or F
      password,
    };

    const response = await axios.post(`${BASE_URL}/api/v-1/auth/signup`, data);
    return response.data;
  } catch (error) {
    console.log(
      "Error at services/auth/index.js: register() : ",
      error.response.data
    );
    return error.response.data;
  }
};

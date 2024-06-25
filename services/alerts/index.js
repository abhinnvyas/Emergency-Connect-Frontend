import axios from "axios";
import BASE_URL from "../service.config";

export const creatAlert = async (
  type,
  location,
  status,
  latitude,
  longitude
) => {
  try {
    const data = {
      type: "Fire", //  General, Medical, Fire, Police, Ambulance
      location: "Some Location3",
      status: "Active", //  Active Resolved Cancelled
      latitude: 22.719569,
      longitude: 75.857726,
    };

    const response = await axios.post(
      `${BASE_URL}/api/v-1/alert/createAlerts`,
      data
    );
    console.log(
      "Output from services/alerts/index.js: createAlert() : ",
      response.data
    );
    return response.data;
  } catch (error) {
    console.log(
      "Error at services/alerts/index.js: createAlert() : ",
      error.response ? error.response.data : error.message
    );
    return error.response.data;
  }
};

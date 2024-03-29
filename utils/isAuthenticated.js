import * as SecureStore from "expo-secure-store";

export default isAuthenticated = async () => {
  try {
    const token = await SecureStore.getItemAsync("token");
    return !!token;
  } catch (error) {
    console.log("Error authenticating user: ", error);
  }
};

import { useSelector } from "react-redux";
import { boolean } from "yargs";

export default isAuthenticated = async () => {
  const token = useSelector((state) => state.token.value);
  return !!token;
};

import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  console.log("🚀🚀🚀 ~ file: App.js ~ line 10 ~ App ~ location", location);
  return <h2>This is Login🍕🍕</h2>;
};

export default Login;

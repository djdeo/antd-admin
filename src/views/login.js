import { Button } from "antd";
import { setToken } from "../utils/auth";

const Login = ({history}) => {
  const loginUser = () => {
    setToken('usertest')
    history.push('/admin')
  }
  return (
    <Button type="primary" onClick={() => loginUser()}>
      Login
    </Button>
  );
};

export default Login;

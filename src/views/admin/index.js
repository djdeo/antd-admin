import { Redirect, Route, Switch } from "react-router-dom";
import MainLayout from "../../components/MainLayout";
import { adminRoutes } from "../../router";
import { isLoggedIn } from "../../utils/auth";

const Admin = () => {
  console.log("🚀 ~ file: Index.js ~ line 5 ~ isLoggedIn", isLoggedIn());

  return isLoggedIn() ? (
    <MainLayout>
      <Switch>
        {adminRoutes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={(routeProps) => <route.component {...routeProps} />}
            />
          );
        })}
        <Redirect to={adminRoutes[0].path} from="/admin" />
        <Redirect to="/404" />
      </Switch>
    </MainLayout>
  ) : (
    <Redirect to="/login" />
  );
};

export default Admin;

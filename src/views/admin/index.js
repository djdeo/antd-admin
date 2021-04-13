import { Redirect, Route, Switch } from "react-router-dom";
import { adminRoutes } from "../../router";

const Admin = () => {
  return (
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
      <Redirect to="/404"/>
    </Switch>
  );
};

export default Admin;

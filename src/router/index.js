import {  Route } from "react-router-dom";
import Index from "../views/admin/dashboard/Index";
import Edit from "../views/admin/products/Edit";
import List from "../views/admin/products/List";
import Login from "../views/login";
import PageNotFound from "../views/PageNotFound";

export const mainRoutes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/404",
    component: PageNotFound,
  },
];
export const adminRoutes = [
  {
    path: "/admin/dashboard",
    component: Index,
  },
  {
    path: "/admin/products",
    component: List,
    exact:true
  },
  {
    path: "/admin/products/edit/:id",
    component: Edit,
  },
];

export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

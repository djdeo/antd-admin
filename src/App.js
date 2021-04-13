import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { mainRoutes } from "./router";

import Admin from "./views/admin";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" render={routeProps=><Admin {...routeProps} />} />
        {mainRoutes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;

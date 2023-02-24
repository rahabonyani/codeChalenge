import { Route, BrowserRouter, Switch } from "react-router-dom";
import HomePage from "../Pages/HomePage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

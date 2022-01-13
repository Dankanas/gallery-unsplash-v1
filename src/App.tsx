import React, { FC } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/store";
import MainLayout from "./layouts/MainLayout";
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import Search from "./views/Search";

import routes from "./constants/routes";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <MainLayout>
          <Switch>
            <Route path={routes.home} exact>
              <Home />
            </Route>
            <Route path={routes.favorites} exact>
              <Favorites />
            </Route>
            <Route path={routes.search}>
              <Search />
            </Route>
          </Switch>
        </MainLayout>
      </Router>
    </Provider>
  );
};

export default App;

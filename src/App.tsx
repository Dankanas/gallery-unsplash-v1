import React, { FC } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./views/Home";
//import Favorites from '@/views/Favorites';
import MainLayout from "./layouts/MainLayout";
import routes from "./constants/routes";
import store from "./store/store";
import Favorites from "./views/Favorites";

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
          </Switch>
        </MainLayout>
      </Router>
    </Provider>
  );
};

export default App;

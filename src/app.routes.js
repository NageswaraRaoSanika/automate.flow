import React from 'react';
import { Provider } from 'react-redux';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import store from './store';

import LoginContainer from './containers/login/login.container';
import Workflows from './containers/workflows/workflows.container';

const AppRoutes = () => (
  <Provider store={store()}>
    <Router>
      <Switch>
        <Route path="/" exact={true} component={LoginContainer} />
        <Route path="/workflows" exact={true} component={Workflows} />
      </Switch>
    </Router>
  </Provider>
);

export default AppRoutes;

import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import LoginContainer from './containers/login/login.container';

const AppRoutes = () => (
  <Router>
    <Switch>
      <Route path="/" exact={true} component={LoginContainer} />
    </Switch>
  </Router>
);

export default AppRoutes;

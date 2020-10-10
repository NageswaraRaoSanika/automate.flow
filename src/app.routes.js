import React from 'react';
import { Provider } from 'react-redux';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import store from './store';

import LoginContainer from './containers/login/login.container';

const AppRoutes = () => (
  <Provider store={store()}>
    <Router>
      <Switch>
        <Route path="/" exact={true} component={LoginContainer} />
      </Switch>
    </Router>
  </Provider>
);

export default AppRoutes;

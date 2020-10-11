import React from 'react';
import { Provider } from 'react-redux';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { checkAuth } from './store/auth/actions';

import store from './store';

import LoginContainer from './containers/login/login.container';
import Workflows from './containers/workflows/workflows.container';
import Workflow from './containers/workflow/workflow.container';

const AppRoutes = () => {
  const user = checkAuth();

  return (
    <Provider store={store()}>
      <Router>
        <Switch>
          <Route
            path="/"
            exact={true}
            render={() => {
              if (user !== null) {
                return <Workflows />;
              } else {
                return <LoginContainer />;
              }
            }}
          />
          <Route
            path="/workflow/:id"
            exact={true}
            render={(props) => {
              if (user !== null) {
                return <Workflow {...props} />;
              } else {
                return <LoginContainer />;
              }
            }}
          />
        </Switch>
      </Router>
    </Provider>
  );
};

export default AppRoutes;

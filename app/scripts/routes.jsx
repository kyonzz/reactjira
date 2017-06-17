import React from 'react';
import { Route, Link, browserHistory, Router, IndexRoute } from 'react-router';
import { checkStatus } from 'utils/routerInterceptor';

import App from 'containers/App';
import AppPublic from 'containers/AppPublic';
import AppPrivate from 'containers/AppPrivate';

import Home from 'containers/Home';
import Logged from 'containers/Logged';
import TaskFullInfo from 'containers/TaskFullInfo';
import EnsureLoggedInContainer from './containers/EnsureLoggedInContainer';
import Login from 'containers/Login';
import NotFound from 'containers/NotFound';

import Jira from 'containers/Jira';
import Test from 'containers/Test';
import store from 'store';
//import 'bootstrap/dist/bootstrap.min.css';

export default function createRoutes() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="login" component={Login} />
        <Route path="Test" component={Test} />
          <Route path="/dashboard" component={Jira} />
          <Route path="/task/:id" component={TaskFullInfo} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  );
}

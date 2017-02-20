import React from 'react';
import { Route, Link, browserHistory, Router, IndexRoute } from 'react-router';
import { checkStatus } from 'utils/routerInterceptor';

import App from 'containers/App';
import AppPublic from 'containers/AppPublic';
import AppPrivate from 'containers/AppPrivate';

import Home from 'containers/Home';
import Logged from 'containers/Logged';
import NotFound from 'containers/NotFound';

import Jira from 'containers/Jira';
import Test from 'containers/Test';

export default function createRoutes() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="jira" component={Jira} />
        <Route path="Test" component={Test} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  );
}

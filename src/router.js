import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Things from './routes/Things'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path='/things' exact component={Things} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

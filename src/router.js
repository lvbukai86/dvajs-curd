import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
//这里的component指的是页面
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={ IndexPage} />
        <Route path="/products" exact component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

var history = createBrowserHistory();
import Main from './components/main'
import TodoPage from './components/todo-page'
import About from './components/about'

module.exports = (
  <Router history={history}>
    <Route path="/" component={Main}>
      <IndexRoute component={TodoPage} />
      <Route path="about" component={About} />
    </Route>
  </Router>
);

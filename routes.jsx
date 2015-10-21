import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

var history = createBrowserHistory();
import Main from './components/main'
import TodoList from './components/todo-list'
import About from './components/about'

module.exports = (
  <Router history={history}>
    <Route path="/" component={Main}>
      <IndexRoute component={TodoList} />
      <Route path="about" component={About} />
    </Route>
  </Router>
);

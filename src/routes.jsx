import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

var history = createBrowserHistory();
import Main from './components/main'
import TodoCategories from './components/todo-categories'
import TodoPage from './components/todo-page'
import About from './components/about'

module.exports = (
  <Router history={history}>
    <Route path="/" component={Main}>
      <IndexRoute component={TodoCategories} />
      <Route path="about" component={About} />
      <Route path="/list/:cat_id" component={TodoPage} />
    </Route>
  </Router>
);

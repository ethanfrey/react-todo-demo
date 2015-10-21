import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

var history = createBrowserHistory();

var Main = require('./components/main');
var Hello = require('./components/hello');

var Index = React.createClass({
  render() { return <Hello name="Index"/>; }
})

var One = React.createClass({
  render() { return <Hello name="Page One"/>; }
})

var Two = React.createClass({
  render() { return <Hello name="Page Two"/>; }
})

module.exports = (
  <Router history={history}>
    <Route path="/" component={Main}>
      <IndexRoute component={Index} />
      <Route path="one" component={One} />
      <Route path="two" component={Two} />
    </Route>
  </Router>
);

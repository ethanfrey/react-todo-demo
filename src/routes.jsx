import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

var history = createBrowserHistory();
import Main from './components/main'
import Hello from './components/hello'
import ModalDemo from './components/modal-demo'

var One = React.createClass({
  render() { return <Hello name="Page One"/>; }
})

var Two = React.createClass({
  render() { return <Hello name="Page Two"/>; }
})

module.exports = (
  <Router history={history}>
    <Route path="/" component={Main}>
      <IndexRoute component={ModalDemo} />
      <Route path="one" component={One} />
      <Route path="two" component={Two} />
    </Route>
  </Router>
);

var React = require('react');
var ReactRouter = require('react-router');
var createBrowserHistory = require('history/lib/createBrowserHistory');
var history = createBrowserHistory();
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

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

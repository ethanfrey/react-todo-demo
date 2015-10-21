var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  displayName: "Main",
  render() {
    return (
      <div>
        <nav className="navbar navbar-default header">
          <div className="container-fluid">
            <Link to="/one" className="navbar-brand">One</Link>
            <Link to="/two" className="navbar-brand">Two</Link>
          </div>
        </nav>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
});

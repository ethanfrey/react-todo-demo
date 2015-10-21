import React from 'react';
import {Link} from 'react-router';

module.exports = React.createClass({
  displayName: "Main",
  render() {
    return (
      <div>
        <nav className="navbar navbar-default header">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">Index</Link>
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

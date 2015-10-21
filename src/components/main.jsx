import React from 'react'

import Navbar from './navbar'

module.exports = React.createClass({
  displayName: "Main",
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
});

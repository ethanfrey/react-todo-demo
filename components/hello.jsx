import React from 'react'

module.exports = React.createClass({
  displayName: "Hello",
  render() {
    return (
      <div><h2>Hello: {this.props.name}</h2></div>
    );
  }
});

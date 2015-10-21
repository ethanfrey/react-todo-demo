import React from 'react'
import {ListGroupItem} from 'react-bootstrap'

module.exports = React.createClass({
  displayName: "Todo-Item",
  toggle(e) {
    // TODO: make action
    return true;
  },
  render() {
    return (
      <ListGroupItem disabled={this.props.done}>
        {this.props.title}
      </ListGroupItem>
    );
  }
});

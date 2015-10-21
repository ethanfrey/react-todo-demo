import React from 'react'
import {ListGroupItem} from 'react-bootstrap'

import Actions from '../actions'

module.exports = React.createClass({
  displayName: "Todo-Item",
  toggle(e) {
    console.log("toggle " + this.props.id);
    Actions.toggleItem(this.props.id);
  },
  render() {
    return (
      <ListGroupItem active={!this.props.done} onClick={this.toggle}>
        {this.props.title}
      </ListGroupItem>
    );
  }
});

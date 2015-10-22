import React from 'react'
import {ListGroupItem, Glyphicon} from 'react-bootstrap'

import Actions from '../actions'

module.exports = React.createClass({
  displayName: "Todo-Item",
  toggle(e) {
    console.log("toggle " + this.props.id);
    Actions.toggleItem(this.props.id);
  },
  render() {
    return (
      <ListGroupItem bsStyle={this.props.done ? "info" : "warning"} onClick={this.toggle} href="#">
        {this.props.done ? <Glyphicon glyph="ok" /> : ""} <span>{this.props.title}</span>
        <Glyphicon glyph="pencil" className="pull-right" />
      </ListGroupItem>
    );
  }
});

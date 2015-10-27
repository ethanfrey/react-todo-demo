import React from 'react'
import InlineEdit from 'react-edit-inline'
import {ListGroupItem, Glyphicon} from 'react-bootstrap'

import Actions from '../actions'

class MyInlineEdit extends InlineEdit {
  // patched, so the toggle won't be triggered when starting editing
  startEditing(e) {
    e.stopPropagation();
    super.startEditing();
  }
};

module.exports = React.createClass({
  displayName: "Todo-Item",
  toggle(e) {
    Actions.toggleItem(this.props.cat_id, this.props.id);
  },
  itemChanged(data) {
    Actions.updateItem(this.props.cat_id, this.props.id, data.title);
  },
  startEdit(e) {
    this.refs.editor.startEditing(e);
  },
  render() {
    return (
      <ListGroupItem bsStyle={this.props.done ? "info" : "warning"} onClick={this.toggle} href="#">
        {this.props.done ? <Glyphicon glyph="ok" /> : ""} &nbsp;
        <MyInlineEdit ref="editor" text={this.props.title} change={this.itemChanged} paramName="title" />
        <Glyphicon glyph="pencil" className="pull-right" onClick={this.startEdit} />
      </ListGroupItem>
    );
  }
});

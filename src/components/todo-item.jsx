import React, {Component} from 'react'
import InlineEdit from 'react-edit-inline'
import {ListGroupItem, Glyphicon} from 'react-bootstrap'

import Actions from '../actions'

export class MyInlineEdit extends InlineEdit {
  // patched, so the toggle won't be triggered when starting editing
  startEditing(e) {
    e.stopPropagation();
    super.startEditing();
  }
};

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.startEdit = this.startEdit.bind(this);
    this.toggle = this.toggle.bind(this);
    this.itemChanged = this.itemChanged.bind(this);
  }
  toggle(e) {
    Actions.toggleItem(this.props.cat_id, this.props.id);
  }
  itemChanged(data) {
    Actions.updateItem(this.props.cat_id, this.props.id, data.title);
  }
  startEdit(e) {
    this.refs.editor.startEditing(e);
  }
  render() {
    return (
      <ListGroupItem bsStyle={this.props.done ? "info" : "warning"} onClick={this.toggle} href="#">
        {this.props.done ? <Glyphicon glyph="ok" /> : ""} &nbsp;
        <MyInlineEdit ref="editor" text={this.props.title} change={this.itemChanged} paramName="title" />
        <Glyphicon glyph="pencil" className="pull-right" onClick={this.startEdit} />
      </ListGroupItem>
    );
  }
}
TodoItem.displayName = "Todo-Item";

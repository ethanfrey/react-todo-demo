import React from 'react'
import ReactDOM from 'react-dom'
import {Modal, Input, Button, ButtonInput, ButtonToolbar} from 'react-bootstrap'
import LinkedStateMixin from 'react-addons-linked-state-mixin'

import Actions from '../actions'


var CreateTodoModal = React.createClass({
  displayName: "CreateTodoModal",
  mixins: [LinkedStateMixin],

  getInitialState() {
    return {
      newTitle: ''
    };
  },

  componentDidUpdate() {
    if (this.props.show) {
      let input = ReactDOM.findDOMNode(this.refs.input).querySelector('input');
      input.focus();
    }
  },

  handleSubmit(e) {
    console.log("submitting");
    e.preventDefault();
    this.create();
    this.props.onHide();
  },

  create() {
    let title = this.state.newTitle;
    if (title) {
      Actions.addItem(this.props.cat_id, {title: title, done: false});
      this.setState({newTitle: ''});
    }
  },

  render: function() {
    return (
        <Modal title="Title of Dialog" show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>Create a new Todo Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              New Title: <Input type="text" ref="input" valueLink={this.linkState('newTitle')} />
              <ButtonToolbar>
                <ButtonInput bsStyle="primary" type="submit">Create</ButtonInput>
              </ButtonToolbar>
            </form>
          </Modal.Body>
        </Modal>
    )
  }
});

module.exports = CreateTodoModal;

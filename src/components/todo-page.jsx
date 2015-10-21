import React from 'react'
import ReactDOM from 'react-dom'
import {Button, ButtonInput, ButtonToolbar, Modal, Input} from 'react-bootstrap'
import LinkedStateMixin from 'react-addons-linked-state-mixin'

import Actions from '../actions'
import TodoList from './todo-list'

module.exports = React.createClass({
  displayName: "Todo-Page",
  mixins: [LinkedStateMixin],
  getInitialState() {
    return {
      showModal: false,
      newTitle: ''
    };
  },
  componentWillMount() {
    Actions.refresh();
  },
  open() {
    this.setState({showModal: true});
    ReactDOM.findDOMNode(this.refs.foo).focus();
  },
  close() {
    this.setState({showModal: false});
  },
  clear() {
    Actions.clearDone();
  },
  handleSubmit(e) {
    e.preventDefault();
    this.create();
  },
  create() {
    let title = this.state.newTitle;
    if (title) {
      Actions.addItem({title: title, done: false});
      this.setState({newTitle: '', showModal: false});
    }
  },
  render() {
    return (
      <div>
        <TodoList />
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={this.open}>Add Todo Item</Button>
          <Button bsStyle="danger" ref="foo" onClick={this.clear}>Remove Completed Items</Button>
        </ButtonToolbar>
        <Modal show={this.state.showModal} onHide={this.close}>
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
      </div>
    );
  }
});

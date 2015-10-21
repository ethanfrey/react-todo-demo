import React from 'react'
import {Button, ButtonToolbar, Modal} from 'react-bootstrap'

import TodoList from './todo-list'

module.exports = React.createClass({
  displayName: "Todo-Page",
  getInitialState() {
    return {
      showModal: false
    };
  },
  open() {
    this.setState({showModal: true});
  },
  close() {
    this.setState({showModal: false});
  },
  clear() {
    // TODO: remove done items from list
  },
  render() {
    return (
      <div>
        <TodoList />
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={this.open}>Add Todo Item</Button>
          <Button bsStyle="danger" onClick={this.clear}>Remove Completed Items</Button>
        </ButtonToolbar>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Create a new Todo Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>TODO: add a form here</p>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
});

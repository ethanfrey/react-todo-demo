import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'

module.exports = React.createClass({
  displayName: "ModalDemo",
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
  render() {
    return (
      <div>
        <Button bsStyle="primary" onClick={this.open}>Launch Modal</Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>This is my body</p>
          </Modal.Body>
          <Modal.Footer>
            This is a footer...
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

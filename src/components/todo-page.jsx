import React from 'react'
import ReactDOM from 'react-dom'
import {Button, ButtonInput, ButtonToolbar, Input, Row, Col, Glyphicon} from 'react-bootstrap'

import Actions from '../actions'
import TodoList from './todo-list'
import CreateTodoModal from './todo-modal'


module.exports = React.createClass({
  displayName: "Todo-Page",
  getInitialState() {
    return {
      showModal: false,
    };
  },
  componentWillMount() {
    Actions.refresh();
  },

  // componentDidUpdate() {
  //   console.log("update page");
  //   if (!this.state.showModal) {
  //     console.log("modal shown");
  //     let button = ReactDOM.findDOMNode(this.refs.add);
  //     console.log(button);
  //     button.focus();
  //   }
  // },

  open() {
    this.setState({showModal: true});
  },
  close() {
    this.setState({showModal: false});
  },


  clear() {
    Actions.clearDone();
  },
  render() {
    // TODO: break modal into own package, send actions, auto-focus field on show
    return (
      <div>
        <Row>
          <Col xs={12} md={6}>
            <TodoList />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ButtonToolbar>
              <Button bsStyle="primary" onClick={this.open} ref="add">
                <Glyphicon glyph="plus" /> Add Todo Item
              </Button>
              <Button bsStyle="danger" onClick={this.clear}>Remove Completed Items</Button>
            </ButtonToolbar>
          </Col>
        </Row>

        <CreateTodoModal show={this.state.showModal} onHide={this.close} />
      </div>
    );
  }
});

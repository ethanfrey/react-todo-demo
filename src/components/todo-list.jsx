import React from 'react'
import Reflux from 'reflux'
import {ListGroup, Panel} from 'react-bootstrap'

import TodoItem from './todo-item'
import TodoStore from '../stores/todo-store'

module.exports = React.createClass({
  displayName: "Todo-List",
  mixins: [
    Reflux.listenTo(TodoStore, 'onChange')
  ],
  getInitialState() {
    return {
      items: [{title: "placeholder", done: false, id: 1}]
    }
  },
  onChange(event, data) {
    this.setState({items: data});
  },
  render() {
    return (
      <Panel header="Todo Items">
        <ListGroup fill>
          {this.state.items.map(item => <TodoItem key={item.id} {...item}/> )}
        </ListGroup>
      </Panel>
    );
  }
});

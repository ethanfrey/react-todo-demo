import React from 'react'
import Reflux from 'reflux'
import {ListGroup} from 'react-bootstrap'

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
    console.log(event);
    console.log(data);
    this.setState({items: data});
  },
  render() {
    return (
      <ListGroup>
        {this.state.items.map(item => <TodoItem key={item.id} {...item}/> )}
      </ListGroup>
    );
  }
});

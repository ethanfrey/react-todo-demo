import React from 'react'
import {ListGroup} from 'react-bootstrap'

import TodoItem from './todo-item'

let baseItems = [
  {
    title: "Sleep",
    done: true,
    key: 1
  },
  {
    title: "Eat",
    done: false,
    key: 2
  },
  {
    title: "Have Fun",
    done: false,
    key: 3
  }
];

module.exports = React.createClass({
  displayName: "Todo-List",
  getInitialState() {
    return {
      items: baseItems
    }
  },
  render() {
    return (
      <ListGroup>
        {this.state.items.map(item => <TodoItem {...item}/> )}
      </ListGroup>
    );
  }
});

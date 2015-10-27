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
      items: [],
      title: ""
    }
  },
  onChange(event, cat_id, data) {
    if (cat_id === this.props.cat_id) {
      this.setState({items: data.items, title: data.title});
    }
  },
  render() {
    let cat_id = this.props.cat_id;
    return (
      <Panel header={this.state.title + " Todos"}>
        <ListGroup fill>
          {this.state.items.map(item => <TodoItem key={item.id} cat_id={cat_id} {...item} /> )}
        </ListGroup>
      </Panel>
    );
  }
});

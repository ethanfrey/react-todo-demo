import React, {Component} from 'react'
import Reflux from 'reflux'
import {Panel, ListGroup, ListGroupItem, Row, Col, Glyphicon} from 'react-bootstrap'
import {Link} from 'react-router'

import Actions from '../actions'
import TodoStore from '../stores/todo-store'
import {MyInlineEdit} from './todo-item'


class TodoCat extends Component {
  constructor(props) {
    super(props);
    this.startEdit = this.startEdit.bind(this);
    this.itemChanged = this.itemChanged.bind(this);
  }
  itemChanged(data) {
    console.log('update cat', data);
    Actions.updateCat(this.props.cat_id, data.title);
  }
  startEdit(e) {
    e.stopPropagation();
    this.refs.editor.startEditing(e);
  }
  render() {
    return (
      <ListGroupItem bsStyle={this.props.items.length > 0 ? "warning" : "info"}>
        &nbsp;
        <MyInlineEdit ref="editor" text={this.props.title} change={this.itemChanged} paramName="title" />
        <Glyphicon glyph="pencil" className="pull-right" onClick={this.startEdit} />
      </ListGroupItem>
    );
  }
}
TodoCat.displayName = "Todo-Cat";


let TodoCategories = React.createClass({
  displayName: "Todo-Categories",
  mixins: [
    Reflux.listenTo(TodoStore, 'onChange')
  ],
  getInitialState() {
    let cats = new Map();
    return { cats: cats }
  },
  componentWillMount() {
    Actions.refresh();
  },
  onChange(event, cat_id, data) {
    console.log("New Category info for ", cat_id)
    let newCats = this.state.cats.set(cat_id, data);
    this.setState({cats: newCats});
  },
  showItem(cat) {
    return (
      <Link key={cat.id} to={"/list/" + cat.id}>
        <TodoCat {...cat} />
      </Link>
    );
  },
  render() {
    return (
      <Row>
        <Col xs={12} md={6}>
          <Panel header="Todo Lists">
            <ListGroup fill>
              {[...this.state.cats.values()].map(this.showItem)}
            </ListGroup>
          </Panel>
        </Col>
      </Row>
    );
  }
});

export default TodoCategories;

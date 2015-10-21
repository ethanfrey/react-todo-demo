import React from 'react'
import {Navbar, NavBrand, Nav, NavItem} from 'react-bootstrap'
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'

module.exports = React.createClass({
  displayName: "MyNavBar",
  render() {
    return (
      <Navbar>
        <NavBrand>Todo App</NavBrand>
        <Nav>
          <IndexLinkContainer to="/"><NavItem>Index</NavItem></IndexLinkContainer>
          <LinkContainer to="/one"><NavItem>One</NavItem></LinkContainer>
          <LinkContainer to="/two"><NavItem>Two</NavItem></LinkContainer>
        </Nav>
      </Navbar>
    );
  }
});
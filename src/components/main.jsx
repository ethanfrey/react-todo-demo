import React from 'react'
import {Grid} from 'react-bootstrap'
import Navbar from './navbar'

module.exports = React.createClass({
  displayName: "Main",
  render() {
    return (
      <div>
        <Navbar />
        <Grid>
          {this.props.children}
        </Grid>
      </div>
    );
  }
});

import React from 'react';

export default class Center extends React.Component {
  render() {
      return (
        <center>{this.props.children}</center>
      )
  }
}
import React, { PropTypes } from 'react';

export default class Center extends React.Component {
	propTypes = {
		children: PropTypes.object.isRequired
	}

  render() {
      return (
        <center>{this.props.children}</center>
      )
  }
}
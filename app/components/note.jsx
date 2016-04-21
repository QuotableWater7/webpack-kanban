'use strict';

import React from 'react';

export default class Note extends React.Component {
  constructor() {
    super();
    this.propTypes = {
      id: React.PropTypes.string.isRequired,
      task: React.PropTypes.string.isRequired
    };
  }

  render() {
    return <li key={this.props.id}>{this.props.task}</li>;
  }
}

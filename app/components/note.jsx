'use strict';

import React from 'react';

export default class Note extends React.Component {

  static propTypes = {
    id: React.PropTypes.string.isRequired,
    task: React.PropTypes.string.isRequired
  }

  constructor() {
    super();
  }

  render() {
    return <li key={this.props.id}>{this.props.task}</li>;
  }
}

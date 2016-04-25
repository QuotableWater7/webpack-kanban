'use strict';

import React from 'react';
import Note from './note.jsx';
import uuid from 'node-uuid';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addNote.bind(this);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <button onClick={this.addNote.bind(this)}>+</button>
        <ul>
          {this.state.notes.map(note =>
            <Note {...note} key={note.id}/>
          )}
        </ul>
      </div>
    );
  }

  addNote() {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'whatevs'
      }])
    });
  }
}

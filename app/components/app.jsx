'use strict';

import React from 'react';
import Note from './note.jsx';
import uuid from 'node-uuid';

export default class App extends React.Component {
  render() {
    const notes = [
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
    ];

    return (
      <ul>
        {notes.map(note =>
          <Note {...note}/>
        )}
      </ul>
    );
  }
}

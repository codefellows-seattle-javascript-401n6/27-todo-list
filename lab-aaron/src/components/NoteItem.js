'use strict';

import React from 'react';
import NoteForm from './NoteForm';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.removeNote = this.removeNote.bind(this);
  };
  
  removeNote(event){
    event.preventDefault();
    console.log(`Removing Note: ${this.props.id}`);
    this.props.removeNote(this.props.id);
  };
  // removeNote = (event) => {
  //   event.preventDefault();
  //   console.log(`Removing Note: ${this.props.id}`);
  //   this.props.removeNote(this.props.id);
  // };

  render() {
    return (
      <div>
        <h1>
          {this.props.title}
        </h1>
        <div>
          {this.props.content}
        </div>
        <button onClick={this.removeNote}>Remove Note</button>
      </div>
    )
  };
};

export default NoteItem;
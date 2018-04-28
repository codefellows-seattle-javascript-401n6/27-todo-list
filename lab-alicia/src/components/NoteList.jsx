import React from "react";

import NoteItem from './NoteItem.jsx';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  list() {
    return this.props.notes.map((note, key) => {
     return <Noteitem content={notes.content} title={notes.title} key={key} />;
    })
  }

  render() {
    return <div>
      NoteList
      <div>
        <ul>
          {this.list()}
          <NoteItem
            key={note.id}
            removeNote={this.props.removeNote}
            note={note} />
        </ul>
      </div>
    </div>
  }
}

export default NoteList;
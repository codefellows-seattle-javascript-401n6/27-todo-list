import React from "react";
import ReactDOM from "react-dom";

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
        <NoteItem />
      </div>
      <ul>
        {this.list()}
      </ul>
    </div>
  }
}

export default NoteList;
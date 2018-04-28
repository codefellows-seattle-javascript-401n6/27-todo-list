import React from "react";
import ReactDOM from "react-dom";

class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.remove = this.remove.bind(this);
  }

  remove() {
    this.props.removeNote(this.props.id);
  }

  render() {
    return <div>
      NoteItem
      <h2>{this.props.note.title}</h2>
      <p>{this.props.note.content}</p>
      <button id={this.props.note.id} type="button" 
      onClick={this.props.removeNote}>
        Delete
      </button>
    </div>;
  }
}

export default NoteItem;
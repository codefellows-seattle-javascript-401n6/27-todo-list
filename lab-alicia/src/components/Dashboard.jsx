import React from "react";
import ReactDOM from "react-dom";

import NoteCreateForm from './NoteCreateForm.jsx';
import NoteList from './NoteList.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  addNote(note) {
      this.state.notes.push(note);
      this.setState({notes: this.state.notes});
    }

  removeNote(index) {
    this.state.notes.splice(index, 1);
    this.setState({notes: this.state.notes});
  }

  render() {
    return <div>
      <div>
        <NoteCreateForm addNote={this.addNote} />
        <NoteList removeNote={this.removeNote} 
        notes={this.state.notes} />
      </div>
    </div>;
  }
}

export default Dashboard;
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
    this.setState = {
      id: uuid.v1(),
      editing: false,
      completed: false,
      content: '',
      title: '',
    }
  }

  removeNote(note) {
    this.state.notes.push(note);
    this.setState({notes: this.state.notes.id});
  }

  render() {
    return <div>
      Dashboard
      <div>
        <NoteCreateForm addNote={this.addNote}
        removeNote={this.removeNote}/>
        <NoteList notes={this.state.notes} />
      </div>
    </div>;
  }
}

export default Dashboard;
import React from 'react';
import ReactDom from 'react-dom';

import Notes from './note.jsx';
import NoteList from './note-list.jsx';
import NoteForm from './note-create-form.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        notes: []
  }
  this.addNote = this.addNote.bind(this);
  this.deleteNote = this.deleteNote.bind(this);
}

addNote(noteObj) {
    let newArray = this.state.notes;
    newArray.push(noteObj);
    this.setState({notes: newArray});
    console.log('new note', this.state.notes);
  }

deleteNote(id) {
    console.log('note to delete', id);
    let noteToDelete = this.state.notes.find(note => {
      return note.id = id;
    });
    let noteIndex = this.state.notes.indexOf(noteToDelete);
    this.state.notes.splice(noteIndex, 1);
    this.setState({notes: this.state.notes});
  }

  render() {
    return <main>
      <p>Dashboard</p>
      <NoteForm newNoteFunc={this.addNote}></NoteForm>
      <NoteList notes={this.state.notes} deleteNote={this.deleteNote} />
    </main>
  }
}

export default Dashboard;
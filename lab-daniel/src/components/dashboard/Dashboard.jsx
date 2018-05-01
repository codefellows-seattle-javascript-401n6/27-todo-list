import React from 'react';
import ReactDOM from 'react-dom';
import uuidv1 from 'uuid/v1';

import NoteCreateForm from './NoteCreateForm.jsx';
import NoteListForm from './NoteListForm.jsx'
import NoteItem from './NoteItem.jsx'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }
        this.addGoal = this.addGoal.bind(this)
    }

    addGoal(noteObj) {
        let newArray = this.state.notes;
        newArray.push(noteObj);
        this.setState({notes: newArray});
        console.log('new note', this.state.notes);
      }

    render() {
        return (
            <main>
            <NoteCreateForm newGoalFunc={this.addGoal}></NoteCreateForm>
            <NoteListForm notes={this.state.notes}></NoteListForm>
            </main>
        )
    }
}

export default Dashboard;
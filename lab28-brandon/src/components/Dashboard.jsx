import React from 'react';

import NoteItem from './NoteItem.jsx';
import NoteList from './NoteList.jsx';
import NoteCreateForm from './NoteCreateForm.jsx';


class Dashboard extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     tasks: []
    }
   this.addTask = this.addTask.bind(this);
   this.removeTask = this.removeTask.bind(this);
 }

addTask(taskObj) {
     let newArray = this.state.tasks;
     newArray.push(taskObj);
     this.setState({tasks: newArray});
     console.log('new note', this.state.tasks);
   }

removeTask(id) {
  console.log('task to delete', id);
  let taskToDelete = this.state.tasks.find(task => {
    console.log('task deleted', task.id)
    return task.id === id;
  });
  let taskIndex = this.state.tasks.indexOf(taskToDelete);
  this.state.tasks.splice(taskIndex, 1);
  this.setState({tasks: this.state.tasks});
}

render() {
return<div>
       <NoteCreateForm addTask={this.addTask}/>
       <NoteList tasks={this.state.tasks} removeTask={this.removeTask} />
      </div> 
 }
}

export default Dashboard;

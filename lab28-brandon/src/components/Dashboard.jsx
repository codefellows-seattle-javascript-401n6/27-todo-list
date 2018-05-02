import React from 'react';
import uuidv4 from 'uuidv4';

import NoteCreateForm from './NoteCreateForm.jsx';
import NoteList from './NoteList.jsx';


class Dashboard extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     tasks: [
      {id: uuidv4(), task: "Feed Kiddo", notes: "make sure she eats all veggies"},
      {id: uuidv4(), task: "Wash Kiddo", notes: "wash hands/brush teeth"},
      {id: uuidv4(), task: "Put Kiddo to bed", notes: "read her two books"}, 
   ]};
   this.addTask = this.addTask.bind(this);
   this.removeTask = this.removeTask.bind(this);
 }
 
 addTask(task) {
  console.log('added new task', task);
  task.id = uuidv4();
  this.state.tasks.push(task);
  this.setState({tasks: this.state.tasks});
  }

removeTask(id) {
  console.log('task to delete', id);
  let taskToDelete = this.state.notes.find(item => {
    return item.id === id;
  });
  let taskIndex = this.state.items.indexOf(taskToDelete);
  this.state.items.splice(taskIndex, 1);
  this.setState({items: this.state.items});
}

 render() {
   return <div>
       <NoteCreateForm addTask={this.addTask}/>
       <NoteList items={this.state.tasks}
        removeTask={this.removeTask} />
     </div> 
 }
}

export default Dashboard;

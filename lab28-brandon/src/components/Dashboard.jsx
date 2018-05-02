import React from 'react';

import NoteCreateForm from './NoteCreateForm.jsx';
import NoteList from './NoteList.jsx';

class Dashboard extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     items: [
      {task: "Feed Kiddo", notes: "make sure she eats all veggies"},
      {task: "Wash Kiddo", notes: "wash hands/brush teeth"},
      {task: "Put Kiddo to bed", notes: "read her two books"}, 
   ]};
   this.addTask = this.addTask.bind(this);
   this.removeTask = this.removeTask.bind(this);
 }
 
 addTask(item) {
  console.log('added new task', item);
  this.state.items.push(item);
  this.setState({items: this.state.items});
  }

 removeTask(index) {
  console.log('page removing', index);
  this.state.items.splice(index, 1);
  this.setState({items: this.state.items});
}

 render() {
   return <div>
       <NoteCreateForm addTask={this.addTask}/>
       <Dashboard items= {this.state.items}
        removeTask={this.removeTask}/>
     </div> 
 }
}

export default Dashboard;

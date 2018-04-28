import React from 'react';

class Todoform extends React.Component {
 constructor(props) {
   super(props);
   this.state = {};
   this.updateTask = this.updateTask.bind(this);
   this.updateNotes = this.updateNotes.bind(this);

 }

 updateTask(ev) {
     this.setState({task: ev.target.value});
 }
 updateNotes(ev) {
    this.setState({notes: ev.target.value});
}

 render() {
   return <form>
       <input type="text" task="task" value={this.state.task}
        placeholder="task"
        onChange={this.updateTask}/>
        <input type="text" task="notes" value={this.state.notes}
        placeholder="notes"
        onChange={this.updateNotes}/>
        </form>
 }
}
export default Todoform;

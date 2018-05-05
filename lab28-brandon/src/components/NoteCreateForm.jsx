import React from 'react';
import uuidv4 from 'uuidv4';

class NoteCreateForm extends React.Component {
 constructor(props) {
   super(props);
   this.state = {  
    id: uuidv4(),
    title: '',
    editing: false,
    content: '',
    completed: false 
   };
   this.updateTitle = this.updateTitle.bind(this);
   this.updateContent = this.updateContent.bind(this);
   this.submit = this.submit.bind(this);

 }

 updateTitle(ev) {
     this.setState({title: ev.target.value});
 }
 updateContent(ev) {
    this.setState({content: ev.target.value});
}
submit(ev) {
    ev.preventDefault(); 
    let newId = uuidv4()
    this.setState({id: newId});
    this.props.addTask(this.state);
  }

 render() {
   return <div>
     <h1>Start by giving your Task a Title and Content...</h1> 
     <h2>Then click "Add task"</h2>
      <form onSubmit={this.submit}>
        <input onChange={this.updateTitle} type="text" placeholder="title"/>
        <input onChange={this.updateContent} type="text" placeholder="content"/>
        <button type="submit">Add Task </button>
      </form>
    </div>
 }
}
export default NoteCreateForm;

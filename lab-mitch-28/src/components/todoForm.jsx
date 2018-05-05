import React from 'react';
import uuid4 from 'uuid/v4';


class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      editing: false,
      completed: false,
      id: ''
    }
this.updateTitle = this.updateTitle.bind(this);
this.updateContent = this.updateContent.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(event) {
    this.setState({title: event.target.value});
  }

  updateContent(event) {
    this.setState({content: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    let todoID = uuid4();
    this.setState({id: todoID})
    console.log('inside handle submit')
    this.props.addTodo(this.state);
    console.log(this.state);
    
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
    <input type="text" name="title" placeholder="Title" onChange={this.updateTitle}/>
    <input type="text" name="content" placeholder="To do" onChange={this.updateContent}/>
    <button type="submit">Add</button>
    </form>
  }
}

export default ToDoForm;


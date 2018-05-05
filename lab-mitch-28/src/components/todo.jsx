import React from 'react';
import Dashboard from './dashboard.jsx'

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeTodoItem = this.removeTodoItem.bind(this);
  }
  removeTodoItem(e) {
    console.log('removing', this.props.todo.id);
    console.log('removetodoitem', this.props);
    this.props.removeTodo(this.props.todo.id);
      }

  render() {
    return <li className="todo">
    {console.log('todo.js' , this.props)}
    <h3>{this.props.todo.title}</h3>
    <h4>{this.props.todo.content}</h4>
    <button onClick={this.removeTodoItem} className="remove">Remove</button>
    </li>
  }
}

export default ToDoItem;

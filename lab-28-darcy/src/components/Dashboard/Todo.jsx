import React from 'react';

import { Link } from 'react-router-dom';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
  }

  remove() {
    console.log('removing', this.props.index)
    this.props.removeTodo(this.props.index);
  }

  update() {
    console.log('id= ', this.props.todo.id);
    this.props.updateTodo(this.props.todo.id)
  }

  render() {
    return <div>
      <ul>
        <li id="list-title">
          <Link to={"/todo/" + this.props.content}>
            {this.props.todo.title}
          </Link>
        </li>
      </ul>
      <ul>
        <li id="list-content"> {this.props.todo.content} </li>
      </ul>
        <button id="remove" onClick={this.remove}>Remove</button>
        <button onClick={this.update}>Update</button>
    </div>
  }
}

export default Todo;


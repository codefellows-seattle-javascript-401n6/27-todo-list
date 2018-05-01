import React from 'react';

import { Link } from 'react-router-dom';
import TodoUpdateForm from './TodoUpdateForm.jsx';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    }
    this.remove = this.remove.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.finishUpdate = this.finishUpdate.bind(this);
  }

  remove() {
    console.log('removing', this.props.index)
    this.props.removeTodo(this.props.index);
  }

  toggleUpdate() {
    this.setState({isEditing: !this.state.isEditing});
  }

  finishUpdate(updatedItem) {
    this.setState({isEditing: false});
    this.props.updateTodo(updatedItem, this.props.index);
  }

  render() {
    if (this.state.isEditing) {
      return <TodoUpdateForm title={this.props.todo.title}
        content={this.props.todo.content}
        finishUpdate={this.finishUpdate}
        toggleUpdate={this.toggleUpdate} />
    }
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
        <button id="remove" onClick={this.remove}> Remove </button>
        <button onClick={this.toggleUpdate}> Update </button>
    </div>
  }
}

export default Todo;
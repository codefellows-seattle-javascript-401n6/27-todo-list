import React from 'react';

import TodoForm from './TodoForm.jsx';
import TodoUpdateForm from './TodoUpdateForm.jsx';
import TodoList from './TodoList.jsx';

class TodoPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [
        {
          id: 1,
          title: 'Chores',
          content: 'Mow the lawn',
          editing: false,
          completed: false
        },
        {
          id: 2,
          title: 'Grocery Shopping',
          content: 'Milk',
          editing: false,
          completed: false
        },
        {
          id: 3,
          title: 'Pay Bills',
          content: 'Electric',
          editing: false,
          completed: false
        }
      ]
    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  addTodo(todo) {
    this.state.todo.push(todo);
    this.setState({ todo: this.state.todo });
  }

  removeTodo(index) {
    console.log('todo remove', index);
    this.state.todo.splice(index, 1);
    this.setState({ todo: this.state.todo });
  }

  updateTodo(editedNote) {
    console.log('todoPage id= ', id);
    // map Over todo's
    // if id is = to passed in id
    // update that note (note = editedNote)
  }

  render() {
    return <div>
      <ul>
        <TodoList todo={this.state.todo} removeTodo={this.removeTodo} updateTodo={this.updateTodo} />
        <TodoForm addTodo={this.addTodo} />
      </ul>
    </div>
  }
}

export default TodoPage;
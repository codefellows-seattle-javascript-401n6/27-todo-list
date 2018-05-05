import React from 'react';
import ReactDom from 'react-dom'

import ToDoList from './todo-list.jsx';
import ToDoForm from './todoForm.jsx';
import ToDoItem from './todo.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  addTodo(todo) {
    let collectorArray = this.state.todos
    collectorArray.push(todo);
    this.setState({todos: collectorArray});
    console.log("Inside AddTodo", this.state.todos);
  }
  removeTodo(id) {
      console.log ('inside removetodo', id);
      let newArray = this.state.todos.filter(todo => {
        if (todo.id !== id) return todo;
        })
      this.setState({todos: newArray});


    // console.log("Deleting todo", id)
    // let todoDel = this.state.todos.findIndex(todo => todo.id === id);
    // this.state.todos.splice(todoDel, 1);
    // this.setState({todos: this.state.todos});
  }


  render() {
    return <div>
      <ToDoForm addTodo={this.addTodo}/>
      <ToDoList todolist={this.state.todos} removeTodo={this.removeTodo}/>
    </div>
  }
}

export default Dashboard;
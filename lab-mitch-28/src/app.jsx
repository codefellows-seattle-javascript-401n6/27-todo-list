import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import HomePage from './components/homepage.jsx';
import ToDoList from './components/todo-list.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: 'My Routed React App'}
  }
  render() {
    return <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">HomePage</Link></li>
            <li><Link to="/todolist">ToDoList</Link></li>
          </ul>
        </nav>
      <h1>{this.state.title}</h1>
      <Route path exact ="/" component={HomePage} />
      <Route path="/todolist" component={ToDoList} /> 
      </div>
      </Router>
  }
}

let root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App/>, root);

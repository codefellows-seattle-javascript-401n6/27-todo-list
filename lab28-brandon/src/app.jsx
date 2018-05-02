'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
 } from 'react-router-dom'

import Landing from './components/Landing.jsx';
import Dashboard from './components/Dashboard.jsx';
import './style/main.scss';

class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     title: 'My Routed React App',
   }
 }

 render() {
   console.log('app render');
   return <Router>
    <div>
      <nav>
        <ul>
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/dashboard">Todo-List</Link></li>
        </ul>
      </nav>
      <h1>{this.state.title}</h1>
      <Route exact path="/" component={Landing} />
      <Route path="/dashboard" component={Dashboard} />
   </div>
   </Router>
 }
}

let root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App/>, root);
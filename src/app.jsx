'use strict';
import React from 'react';
import ReactDom from 'react-dom';

import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Landing from './component/Landing.jsx';
import Dashboard from './component/Dashboard.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'I am so tired',
    }
  }
  render(){
    return <Router>
      <div>
        <nav>
        <h1>
          {this.state.title}
        </h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/dashboard'>Dashboard</Link></li>
        </ul>
        </nav>
        <div id='main-content'>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/dashboard' component={Dashboard}/>
        </div>
      </div>
    </Router>
  }
}

let root = document.createElement('div');
document.body.appendChild(root);
ReactDom.render(<App/>, root);


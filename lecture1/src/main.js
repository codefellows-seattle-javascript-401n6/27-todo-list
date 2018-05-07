'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

import {
  BrowserRouter as Router,
  Route,
  link
} from 'react-router-dom';

import Homepage from './components/homepage.jsx';
import Contacts from './components/contacts.jsx';

class App extends React.Component { // MyCoolApp is the name of the app
  constructor(props){
    super(props);
    this.state = {
      title: 'My Routed React App'
    }
  }

  render() { // JSX
    return <div>
      <h1>{this.state.title}</h1>
      <Homepage />
      <Contacts />
      </div>;
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);  // Class and render need to be the same.
}
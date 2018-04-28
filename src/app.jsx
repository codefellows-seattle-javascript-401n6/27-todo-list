'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import Landing from './component/Landing.jsx';
import ToDoList from './component/ToDoList.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'I am so tired',
    }
  }
  render(){
    return <div>
      <h1>
        {this.state.title}
      </h1>
      <Landing />
      <ToDoList />
    </div>
  }
}

let root = document.createElement('div');
document.body.appendChild(root);
ReactDom.render(<App/>, root);


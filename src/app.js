'use strict';
const React = require('react');
const ReactDom = require('react-dom');


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
    </div>
  }
}

let root = document.createElement('div');
document.body.appendChild(root);
ReactDom.render(<App/>, root);


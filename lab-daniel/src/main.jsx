import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class App extends React.Component {
    constructor(props){
    super(props);
    console.log('here');
    this.state = {
        header: 'To-do list with React'
        }
    }
      
    render(){
        return <Router>
            <div>
                <h1>{this.state.header}</h1>
            </div>
        </Router>
        
    }
}

  const root = document.getElementById('root');
  ReactDOM.render(<App/>, root);
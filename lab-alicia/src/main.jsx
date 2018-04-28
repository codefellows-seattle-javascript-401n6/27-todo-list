import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './components/Dashboard.jsx';
import Landing from './components/Landing.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div> 
      <navbar>
        <h1>ToDo List</h1>
          <ul>
            <Dashboard />
            <Landing />
          </ul>
      </navbar>
    </div>
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
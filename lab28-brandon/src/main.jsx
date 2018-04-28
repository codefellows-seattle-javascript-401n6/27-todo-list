const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     title: 'My Routed React App',
   }
 }

 render() {
   return <div>
      <h1>{this.state.title}</h1>
   </div>;
 }
};
let root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App/>, root);
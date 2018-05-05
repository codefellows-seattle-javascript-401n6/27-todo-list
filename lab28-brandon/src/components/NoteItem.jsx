import React from 'react';
import {Link} from 'react-router-dom';

class Note extends React.Component {
 constructor(props) {
   super(props);
   this.remove = this.remove.bind(this);
 }

 remove() {
   event.preventDefault();
  console.log('removing', this.props.id)
  this.props.removeTask(this.props.id);
}
 render() {
   return <div>
     {this.props.title}: {this.props.content}. 
      <button onClick={this.remove}>done</button>
     </div>
 }
}
export default Note;

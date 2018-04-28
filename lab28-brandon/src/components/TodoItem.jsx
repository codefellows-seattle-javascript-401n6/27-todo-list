import React from 'react';

class Todoitem extends React.Component {
 constructor(props) {
   super(props);
 }

 render() {
   return <div>
     <span>Task: {this.props.task} </span>
     <span>Notes: {this.props.notes} </span>
     </div>
 }
}
export default Todoitem;

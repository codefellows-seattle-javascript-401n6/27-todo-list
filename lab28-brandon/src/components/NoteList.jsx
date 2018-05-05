import React from 'react';

import Note from './NoteItem.jsx';

class NoteList extends React.Component {
 constructor(props) {
   super(props);
   this.list = this.list.bind(this);
 }
list() {
    return this.props.tasks.map((task) => {
        return <Note key={task.id} id={task.id} title={"Title: " + task.title} content={"Content: " + task.content}  removeTask={this.props.removeTask}/>;
      });
}

 render() {
   return <div>
     <h2>Your "List-of-Task's" </h2>
     <ul>{this.list()} </ul>
     </div>
 }
}
export default NoteList;

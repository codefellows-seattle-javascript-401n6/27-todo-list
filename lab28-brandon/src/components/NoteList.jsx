import React from 'react';

import Item from './NoteItem.jsx';

class NoteList extends React.Component {
 constructor(props) {
   super(props);
 }
list() {
    return this.props.items.map((item, index) => {
        return <Item task={item.task} notes={item.notes}
          key={index} index={index}
          removeTask={this.props.removeTask}/>;
      });
}

 render() {
   return <ul>
       {this.list()}
     </ul>
 }
}
export default NoteList;

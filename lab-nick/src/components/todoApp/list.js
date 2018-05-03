'use strict';

import React from 'react';

import ListEdit from './list-edit.js';

class List extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
    this.deleteOneItem = this.deleteOneItem.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.saveUpdate = this.saveUpdate.bind(this);
    this.cancelUpdate = this.cancelUpdate.bind(this);
  }

  toggleEdit() {
    this.setState({editing: !this.setState.editing});
    console.log(this.state, 'Editing state changed.')
  }

  deleteOneItem(event) {
    event.preventDefault();
    console.log('deleting item', this.props.id, 'from the list.');
    this.props.deleteItem(this.props.id);
  }

  saveUpdate(itemInfo) {
    console.log(this.state, 'Editing state changed.')
    this.setState({editing: false});
    this.props.editItem(itemInfo, this.props.id);
  }

  cancelUpdate() {
    this.setState({editing: false});
  }

  render() {
    if (this.state.editing) {
      return <ListEdit  title={this.props.title} 
                        content={this.props.content} 
                        id={this.props.id} 
                        key={this.props.id} 
                        saveUpdate={this.saveUpdate} 
                        cancelUpdate={this.cancelUpdate}>
             </ListEdit>
    }
    // return <li onDoubleClick={this.toggleEdit}><div>
    return <li><div>
      {this.props.title}: {this.props.content}. 
      <button onClick={this.deleteOneItem}>DELETE</button>
      <button onClick={this.toggleEdit}>Edit</button>
      </div>
    </li>
  }
}

export default List;
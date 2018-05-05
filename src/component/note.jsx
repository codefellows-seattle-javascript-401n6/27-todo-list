'use strict';
import React from 'react';
import Dashboard from './NoteCreateForm.jsx';
import Edit from './edit.jsx';
import {Link} from 'react-router-dom';

class Note extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
    };
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    
  }

  remove() {
    console.log('12 removing', this.props.index)
    this.props.removeNote(this.props.index);
  }

  edit() {
   this.setState({isEditing: !this.state.isEditing});
   console.log('17 testing double click', this.state.isEditing);
  }

  save(title, content) {
    this.props.updateNote(this.props.index, title, content);
    this.edit();
  }

  render() {
    if (this.state.isEditing) {
      return <Edit title={this.props.title}
        content={this.props.content}
        onSave={this.save} />
    }
    return <div onDoubleClick={this.edit}>
        <span>ID:
          {this.props.id}
        </span>
        <span>Title:
          {this.props.title}
        </span>
        <span>Content:
          {this.props.content}
        </span>
      <button onClick={this.remove}>remove</button>
    </div>
  }
}

export default Note;
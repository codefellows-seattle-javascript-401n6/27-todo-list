'use strict';
import React from 'react';
import uuid from 'uuid';
import Note from './note.jsx';




class EditingView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: '',
      isEditing: false, 
      content: '',
      title: '',
    }
    this.editContent = this.editContent.bind(this);
    this.editTitle = this.editTitle.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
    this.cancle = this.cancle.bind(this);
  }


  editContent(ev){
    let inputContent = ev.target.value;
    this.setState({content:inputContent});
  }
  
  
  editTitle(ev){
    let inputTitle = ev.target.value;
    this.setState({title:inputTitle});
  }
  
// handleChange(ev){
//   let state = {};
//   state[ev.target.title] = ev.target.value;
//   state[ev.target.content] = ev.target.value;
//   this.setState(state);
// }

submitEdit(ev) {
  ev.preventDefault();
  this.props.onSave(this.state.title, this.state.content);
}

cancle() { 
  this.props.onEdit();
  console.log('17 testing double click', this.state.isEditing);
 }

  render(){
    return <div>
    <form onSubmit={this.submitEdit}>
    <input type="text" name='content' value={this.state.content} onChange={this.editContent} placeholder='content'></input>
    <input type="text" name='title' value={this.state.title} onChange={this.editTitle} placeholder='Title'></input>
    <button type="submit">save</button>
    </form>
    <button onClick={this.cancle}>cancle</button>
    </div>
  }
}

export default EditingView;
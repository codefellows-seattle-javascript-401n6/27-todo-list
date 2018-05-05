'use strict';
import React from 'react';
import uuid from 'uuid';



class EditingView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: '',
      editing: false, 
      content: '',
      title: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
    this.cancle = this.cancle.bind(this);
  }


handleChange(ev){
  let state = {};
  state[ev.target.title] = ev.target.value;
  state[ev.target.content] = ev.target.value;
  this.setState(state);
}

submitEdit(ev) {
  ev.preventDefault();
  this.props.onSave(this.state.title, this.state.content);
}

cancle() { 
  this.setState({isEditing: !this.state.isEditing});
  console.log('17 testing double click', this.state.isEditing);
 }

  render(){
    return <div>
    <form onSubmit={this.handleSubmit}>
    <input type="text" name='content' value={this.state.content} onChange={this.updateContent} placeholder='content'></input>
    <input type="text" name='title' value={this.state.title} onChange={this.updateTitle} placeholder='Title'></input>
    <input type='submit' value='Add Note' />
    <button type="submit">save</button>
    </form>
    <button onClick={this.cancle}>cancle</button>
    </div>
  }
}

export default EditingView;
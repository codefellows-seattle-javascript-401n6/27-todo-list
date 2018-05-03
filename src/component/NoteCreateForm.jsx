'use strict';
import React from 'react';

import uuid from 'uuid';


class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: '',
      editing: false, 
      content: '',
      title: '',
    }
    this.updateContent = this.updateContent.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


updateContent(ev){
  let inputContent = ev.target.value;
  this.setState({content:inputContent});
}


updateTitle(ev){
  let inputTitle = ev.target.value;
  this.setState({title:inputTitle});
}

handleSubmit(ev) {
  ev.preventDefault();
  let note = {title: this.state.title, content: this.state.content, id: uuid.v1(),}
  this.props.addNote(note);
  this.setState({
    title: '',
    content: ''
  })
}

edit() {
  the.setState({editing: true})
}

  render(){
    return <div>
    <form onSubmit={this.handleSubmit}>
    <input type="text" name='content' value={this.state.content} onChange={this.updateContent} placeholder='content'></input>
    <input type="text" name='title' value={this.state.title} onChange={this.updateTitle} placeholder='Title'></input>
    <input type='submit' value='Add Note' />
    </form>
    </div>
  }
}

export default Dashboard;
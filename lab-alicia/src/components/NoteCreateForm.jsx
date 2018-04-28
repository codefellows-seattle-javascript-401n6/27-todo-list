import React from "react";
import uuidv4 from 'uuid/v4';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      id: uuid('v4'),
      editing: false,
      completed: false,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.addNote(this.state);
  }

  handleChange(ev) {
    this.setState({
      title: this.state.title, 
      content: this.state.content})
  }

  render() {
    return <div>
      NoteCreateForm
      <form 
      type='text'
      name='title'
      placeholder='title'
      value={this.state.title}
      onSubmit={this.handleChange}
      />
      <input
      type='text'
      name='content'
      placeholder='content'
      value={this.state.content}
      onSubmit={this.handleChange}
      />
      <button type='submit'>Create Note</button>
    </div>;
  }
}

export default NoteCreateForm;
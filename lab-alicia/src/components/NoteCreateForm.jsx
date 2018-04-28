import React from "react";
import ReactDOM from "react-dom";

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    }

    this.onComplete = this.onComplete.bind(this);
  }

  onComplete(ev) {
    this.setState({title: this.state.title, content: this.state.content})
  }

  render() {
    return <div>
      NoteCreateForm
    </div>;
  }
}

export default NoteCreateForm;
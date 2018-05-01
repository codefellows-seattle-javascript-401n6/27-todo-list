import React from "react";


class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this)
  }

  handleRemove(ev) {
      return this.props.removeGoal(this.props.note.id)
  }

  render() {
    return (
        <div>
            <h3>{this.props.note.title}</h3>
            <p>{this.props.note.content}</p>
            <button onClick={this.handleRemove}> Delete </button>
        </div>
    )
  }
}

export default NoteItem;
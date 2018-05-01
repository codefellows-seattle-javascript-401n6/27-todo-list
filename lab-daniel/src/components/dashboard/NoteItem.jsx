import React from "react";


class NoteItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
        <div>
            <h3>{this.props.note.title}</h3>
            <p>{this.props.note.content}</p>
        </div>
    )
  }
}

export default NoteItem;
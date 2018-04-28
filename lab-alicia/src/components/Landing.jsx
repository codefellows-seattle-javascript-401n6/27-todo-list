import React from "react";
import ReactDOM from "react-dom";

import NoteCreateForm from "./NoteCreateForm.jsx";

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Landing<NoteCreateForm /><NoteList /></div>
  }
}

export default Landing;
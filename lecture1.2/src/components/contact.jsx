'use strict';

import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <span>Name: {this.state.name} </span>
      <span>Number: {this.state.number} </span>
    </div>
  }
}

export default Contact;
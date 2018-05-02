'use strict';

import React from 'react';
import Contact from './contact.jsx';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {name: "Mom", number: "555-111-9999"},
        {name: "Dad", number: "555-112-0000"},
        {name: "Landlord", number: "555-867-5309"}
      ]
    }    
  }

  list() {
    return this.props.contacts.map((contact, key) => {
      return <Contact name={contact.name} number={contact.number} key={key}/>;
    });
  }

  render() {
    return <ul>
      {this.list()}
    </ul>
  }
}

export default Contacts;
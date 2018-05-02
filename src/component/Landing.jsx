'use strict';
import React from 'react';
import Note from './note.jsx';


class Landinig extends React.Component{
  constructor(props){
    super(props);
 
  }
  render(){
    return <div>
      <h3>
      Welcome to your note's list, click Note List to see your Notes and add/remove a Note
      </h3>
    
    </div>
  }
}

export default Landinig;
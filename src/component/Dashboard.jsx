'use strict';
import React from 'react';


class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list1: 'thing1',
      list2: 'thing2',
      list3: 'thing3',
      list4: 'thing4',
    }
  }
  render(){
    return <div>
      <ul>
        <li>{this.state.list1}</li>
        <li>{this.state.list2}</li>
        <li>{this.state.list3}</li>
        <li>{this.state.list4}</li>
      </ul>
    </div>
  }
}

export default Dashboard;
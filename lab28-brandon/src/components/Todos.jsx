import React from 'react';

import TodoList from './TodoList.jsx';


class Todos extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     items: [
      {task: "Feed Kiddo", notes: "make sure she eats all veggies"},
      {task: "Wash Kiddo", notes: "wash hands/brush teeth"},
      {task: "Put kiddo to bed", notes: "read her two books"}, 
   ]};
 }

 render() {
   return <ul>
       <TodoList items= {this.state.items}/>
     </ul>
 }
}

export default Todos;

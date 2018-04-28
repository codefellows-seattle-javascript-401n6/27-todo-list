import React from 'react';

class Todolist extends React.Component {
 constructor(props) {
   super(props);
 }

 render() {
   return <ul>
       <li>Feed kiddo</li>
       <li>Wash kiddo</li>
       <li>Put kiddo to bed</li>
     </ul>
 }
}
export default Todolist;

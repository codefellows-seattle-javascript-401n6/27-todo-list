import React from 'react';

class Todolist extends React.Component {
 constructor(props) {
   super(props);
 }

 render() {
   return <ul>
       <li>Wash kiddo</li>
       <li>Feed kiddo</li>
       <li>Play with kiddo</li>
     </ul>
 }
}
export default Todolist;

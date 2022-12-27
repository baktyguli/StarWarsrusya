import React, { useEffect, useState } from 'react';
import './item-list.css';
import SwapiService from './../../services/swapi-service';

const ItemList = () => {
  const [state, setState] = useState({data: []})
  const swapi = new SwapiService()

  useEffect(() => {
    swapi.getAllPeople()
    .then(data => setState({data: data}))
  }, [])

  const content = state.data.map(item => (
      <li className="list-group-item">{item.name}</li>
  ))

  return(
  <ul className="item-list list-group">
    {content}
  </ul>
  )
}

export default ItemList
// export default class ItemList extends Component {
//   state = {
//     item: 0
//   }
//   constructor(props){
//     super(props);
//     this.press = this.press.bind(this);
//   }
//   press(){
//     console.log(this.state.item += 1);
//     this.state.item === 1 ? alert("Luke skywalker") : this.state.item === 2 ? alert("Other one") : alert('another one')
//   }

//   render() {
//     return (
//       <ul className="item-list list-group">
//         <li onClick={this.press} id className="list-group-item">
//           Luke Skywalker
//         </li>
//         <li onClick={this.press} className="list-group-item">
//           Darth Vader
//         </li>
//         <li onClick={this.press} className="list-group-item">
//           R2-D2
//         </li>
//       </ul>
//     );
//   }
// }
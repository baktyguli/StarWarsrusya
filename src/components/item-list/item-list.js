import React, { useEffect, useState} from 'react';
import './item-list.css';

const ItemList = ({setItemId, swapi}) => {
  const [state, setState] = useState({data: []})

  useEffect(() => {
    swapi.getAllPeople()
    .then(data => setState({data: data}))
  }, [])
  console.log('Item list rendered');

  const content = state.data.map(item => (
      <li key={item.id} onClick={()=> setItemId(item.id)} className="list-group-item">{item.name}</li>
  ))

  return(
  <ul className="item-list list-group">
    {content}
  </ul>
  )
}
console.log('Item Details rendered');

export default ItemList;

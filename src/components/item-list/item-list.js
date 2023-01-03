import React, { useEffect, useState } from 'react';
import './item-list.css';
import SwapiService from './../../services/swapi-service';

const ItemList = ({setItemId}) => {
  const [state, setState] = useState({data: []})
  const swapi = new SwapiService()

  useEffect(() => {
    swapi.getAllPeople()
    .then(data => setState({data: data}))
  }, [])

  const content = state.data.map(item => (
      <li onClick={()=> setItemId(item.id)} className="list-group-item">{item.name}</li>
  ))

  return(
  <ul className="item-list list-group">
    {content}
  </ul>
  )
}

export default ItemList;

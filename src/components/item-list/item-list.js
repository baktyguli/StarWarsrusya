import React, { useState, useEffect } from 'react';
import './item-list.css';

const ItemList = ({setItemId, swapi})=> {
  const [state, setState] = useState({data: []})

  useEffect(() => {
  swapi.getAllPlanets()
  .then(data => setState({data: data}))
  }, [])

  const content = state.data.map(item => {
    return(
      <li key={item.id} onClick={() => setItemId(item.id)} className="list-group-item">{item.name}</li>
    )
  })
  return(
    <ul className="item-list list-group">
      {content}
    </ul>
  )

}
export default ItemList;
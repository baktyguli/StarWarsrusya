import React, { useState, useEffect } from 'react';
import './item-details.css';
import SwapiService from '../../services/swapi-service';


const ItemDetails = ({itemId}) => {
  const [state, setState] = useState({ data: {} })
  const { id, population, name, rotationPeriod, diameter } = state.data;

  const swapi = new SwapiService()
  const planetImg = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`

  const updatePlanet = () => {
    const id = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    swapi.getPlanet(id)
      .then(data => {
        setState({ data: data })
      })
  }

  useEffect(() => { 
    swapi.getPlanet(itemId)
    .then(data => {
      setState({data : data})
    })
  }, [itemId])

  return (
    <div className="person-details card">
      <img className="person-image"
        src={planetImg} />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">rotationPeriod</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ItemDetails;
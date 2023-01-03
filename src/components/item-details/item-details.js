import React, { useState, useEffect } from 'react';
import SwapiService from '../../services/swapi-service'
import './item-details.css';


const ItemDetails = ({itemId}) => {

  const [state, setState] = useState({data: {}})
  const {id, name, gender, birthYear, eyeColor} = state.data ;
  const ItemImg = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
  const swapi = new SwapiService() 


  useEffect(() => {
    swapi.getPerson(itemId)
    .then(data => {
      setState({data: data})
    })
  }, [itemId])



  return(
      <div className="person-details card">
        <img className="person-image"
          src={ItemImg}/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default ItemDetails;

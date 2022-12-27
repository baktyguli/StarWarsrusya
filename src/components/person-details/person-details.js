import React, { useState, useEffect } from 'react';
import SwapiService from '../../services/swapi-service'
import './person-details.css';


const PersonDetails = () => {

  const [state, setState] = useState({data: {}})
  const {id, name, gender, birthYear, eyeColor} = state.data ;
  const personImg = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
  const swapi = new SwapiService() 

  const updatePerson = () => {
    const id = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    swapi.getPerson(id)
    .then(data => {
      setState({data: data})
    })
  }
  useEffect(()=>{
    updatePerson()
    setInterval(() => updatePerson(), 3000)
  }, [])



  return(
      <div className="person-details card">
        <img className="person-image"
          src={personImg}/>

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

export default PersonDetails;

import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../pages';
import SwapiService from '../../services/swapi-service';
import './app.css';
import { Provider } from '../swapi-context';

const swapi = new SwapiService()

const App = () => {
  return (
    <div>
    <Provider value={swapi}>
      <Header />
        <RandomPlanet />
      <PeoplePage />
    </Provider>
    </div>
  );
};

export default App;
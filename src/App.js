import React, { Component } from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
// import Title from './components/Title';
import PlanetCard from './components/PlanetCard';
import Missions from './components/Missions';

class App extends Component {
  render() {
    return (
      <div className="header">
        <Header />
        <SolarSystem />
        <Missions />
        <PlanetCard />
      </div>
    );
  }
}

export default App;

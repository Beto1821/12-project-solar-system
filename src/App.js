import React, { Component } from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import PlanetCard from './components/PlanetCard';
import Missions from './components/Missions';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <SolarSystem />
        <Missions />
        <PlanetCard />
      </div>
    );
  }
}

export default App;

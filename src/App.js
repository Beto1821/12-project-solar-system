import React, { Component } from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
// import Title from './components/Title';
import PlanetCard from './components/PlanetCard';

class App extends Component {
  render() {
    return (
      <div className="header">
        <Header />
        <SolarSystem />
        <PlanetCard />
      </div>
    );
  }
}

export default App;

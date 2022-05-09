import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((item) => (
          <MissionCard
            name={ item.name }
            year={ item.year }
            country={ item.country }
            destination={ item.destination }
            key={ item.name }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
